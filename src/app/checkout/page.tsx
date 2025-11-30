'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { ArrowLeft, CreditCard, Shield, Check, ChevronDown, ChevronUp } from 'lucide-react'
import { PackageType, PACKAGES, isValidEmail, isValidPhone, formatPhoneNumber, PaymentFormData } from '@/types/payment'
import { usePayment } from '@/hooks/usePayment'
import PaymentStatusModal from '@/components/payment/PaymentStatusModal'
import { LiquidGlassContainer } from '@/components/ui/liquid-glass-container'
import { LiquidButton } from '@/components/ui/liquid-glass-button'
import { WebGLShader } from '@/components/ui/web-gl-shader'
import Link from 'next/link'

function CheckoutContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const packageType = searchParams.get('package') as PackageType

  const [formData, setFormData] = useState<PaymentFormData>({
    packageType: packageType || 'starter',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })

  const [errors, setErrors] = useState<Partial<PaymentFormData>>({})
  const [showStatusModal, setShowStatusModal] = useState(false)
  const [isOrderSummaryOpen, setIsOrderSummaryOpen] = useState(true)

  const {
    paymentState,
    isLoading,
    error,
    paymentResult,
    orderId,
    initiatePayment
  } = usePayment({
    onSuccess: (result) => {
      setShowStatusModal(true)
    },
    onError: (error) => {
      setShowStatusModal(true)
    },
    onPending: (result) => {
      setShowStatusModal(true)
    }
  })

  // Redirect if no package selected
  useEffect(() => {
    if (!packageType || !PACKAGES[packageType]) {
      router.push('/#pricing-section')
    }
  }, [packageType, router])

  if (!packageType || !PACKAGES[packageType]) {
    return null
  }

  const packageInfo = PACKAGES[packageType]

  const validateForm = (): boolean => {
    const newErrors: Partial<PaymentFormData> = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Nama depan wajib diisi'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi'
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Format email tidak valid'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Nomor telepon wajib diisi'
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = 'Nomor telepon tidak valid (contoh: 08123456789)'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof PaymentFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const handlePayment = async () => {
    if (!validateForm()) return

    await initiatePayment({
      packageType: formData.packageType,
      customerDetails: {
        first_name: formData.firstName,
        last_name: formData.lastName || '',
        email: formData.email,
        phone: formatPhoneNumber(formData.phone)
      }
    })
  }

  return (
    <div className="relative min-h-screen">
      {/* WebGL Shader Background */}
      <div className="absolute inset-0 z-0">
        <WebGLShader />
      </div>

      {/* Overlay for slight dimming effect */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="relative z-20 min-h-screen text-white py-8">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <Link
                href="/#pricing-section"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <h1 className="text-2xl font-bold text-white" style={{
                background: 'linear-gradient(90deg, #ffffff 0%, #d97706 50%, #ffffff 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'gradient-shift 3s linear infinite'
              }}>Checkout</h1>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Payment Form with embedded Order Summary */}
            <LiquidGlassContainer className="bg-black/40 backdrop-blur-md border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300 rounded-3xl overflow-hidden" colorOverlay="none">
              <div className="p-8">
                <div className="pb-4">
                  <h2 className="flex items-center gap-2 text-white text-lg" style={{
                    background: 'linear-gradient(90deg, #ffffff 0%, #d97706 50%, #ffffff 100%)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'gradient-shift 3s linear infinite'
                  }}>
                    <CreditCard className="h-4 w-4 text-amber-400" style={{ filter: 'drop-shadow(0 0 6px rgba(217, 119, 6, 0.6))' }} />
                    Informasi Pembayaran
                  </h2>
                </div>
                <div className="space-y-6">

                  {/* Collapsible Order Summary */}
                  <div className="rounded-lg">
                    <button
                      onClick={() => setIsOrderSummaryOpen(!isOrderSummaryOpen)}
                      className="w-full flex items-center justify-between p-4 hover:bg-amber-500/5 transition-colors rounded-lg"
                    >
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-amber-400" style={{ filter: 'drop-shadow(0 0 6px rgba(217, 119, 6, 0.6))' }} />
                        <span className="text-white font-medium" style={{
                          background: 'linear-gradient(90deg, #ffffff 0%, #d97706 50%, #ffffff 100%)',
                          backgroundSize: '200% 100%',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          animation: 'gradient-shift 3s linear infinite'
                        }}>
                          Ringkasan Pesanan
                        </span>
                      </div>
                      {isOrderSummaryOpen ? (
                        <ChevronUp className="h-4 w-4 text-amber-400" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-amber-400" />
                      )}
                    </button>

                    {isOrderSummaryOpen && (
                      <div className="p-4 pt-0 space-y-4">
                        {/* Package Info */}
                        <div className="bg-gray-900/30 p-4 rounded-lg">
                          <div className="mb-3">
                            <div>
                              <h3 className="font-semibold text-base text-white" style={{
                                background: 'linear-gradient(90deg, #ffffff 0%, #d97706 50%, #ffffff 100%)',
                                backgroundSize: '200% 100%',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                animation: 'gradient-shift 3s linear infinite'
                              }}>{packageInfo.name}</h3>
                              <p className="text-sm text-gray-400">{packageInfo.description}</p>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="grid gap-1 max-h-40 overflow-y-auto">
                              {packageInfo.features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-2">
                                  <Check className="h-3 w-3 text-amber-400 mt-0.5 flex-shrink-0" style={{ filter: 'drop-shadow(0 0 4px rgba(217, 119, 6, 0.6))' }} />
                                  <span className="text-xs text-gray-400">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Price Breakdown - Only Total */}
                        <div className="space-y-2 border-t border-gray-700/50 pt-3 mt-4">
                          <div className="flex justify-between font-bold">
                            <span className="text-white">Total</span>
                            <span className="text-white" style={{
                              background: 'linear-gradient(90deg, #ffffff 0%, #d97706 50%, #ffffff 100%)',
                              backgroundSize: '200% 100%',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text',
                              animation: 'gradient-shift 3s linear infinite'
                            }}>{packageInfo.monthlyPrice}</span>
                          </div>
                        </div>

                        {/* Security Info */}
                        <div className="bg-amber-900/10 p-3 rounded-lg">
                          <div className="flex items-center gap-2">
                            <Shield className="h-3 w-3 text-amber-400" />
                            <span className="text-xs text-amber-400/80">Pembayaran aman dengan Midtrans SSL</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Payment Form Fields */}
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <Label htmlFor="firstName" className="text-gray-600 text-sm">Nama Depan *</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            placeholder="John"
                            className={`bg-amber-900/30 border-amber-700/50 text-white placeholder-amber-300/50 focus:border-amber-400 focus:ring-amber-400 h-9 ${errors.firstName ? 'border-red-500' : ''}`}
                          />
                          {errors.firstName && (
                            <p className="text-xs text-red-400 mt-1">{errors.firstName}</p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="text-gray-600 text-sm">Nama Belakang</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            placeholder="Doe"
                            className="bg-amber-900/30 border-amber-700/50 text-white placeholder-amber-300/50 focus:border-amber-400 focus:ring-amber-400 h-9"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-gray-600 text-sm">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="john@example.com"
                          className={`bg-amber-900/30 border-amber-700/50 text-white placeholder-amber-300/50 focus:border-amber-400 focus:ring-amber-400 h-9 ${errors.email ? 'border-red-500' : ''}`}
                        />
                        {errors.email && (
                          <p className="text-sm text-red-400 mt-1">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-gray-600">Nomor Telepon *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="08123456789"
                          className={`bg-amber-900/30 border-amber-700/50 text-white placeholder-amber-300/50 focus:border-amber-400 focus:ring-amber-400 ${errors.phone ? 'border-red-500' : ''}`}
                        />
                        {errors.phone && (
                          <p className="text-sm text-red-400 mt-1">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    {error && (
                      <div className="bg-red-900/30 border border-red-700/30 rounded-lg p-4">
                        <p className="text-sm text-red-300">{error}</p>
                      </div>
                    )}

                    <LiquidButton
                      onClick={handlePayment}
                      disabled={isLoading}
                      size="lg"
                      className="w-full text-white font-semibold"
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          Memproses Pembayaran...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4" />
                          Bayar Sekarang
                        </div>
                      )}
                    </LiquidButton>

                    <p className="text-xs text-gray-400 text-center">
                      Dengan melanjutkan pembayaran, Anda menyetujui{' '}
                      <Link href="#" className="text-gray-500 hover:text-gray-400">syarat dan ketentuan</Link> serta{' '}
                      <Link href="#" className="text-gray-500 hover:text-gray-400">kebijakan privasi</Link> kami.
                    </p>
                  </div>
                </div>
              </div>
            </LiquidGlassContainer>
          </div>
        </div>
      </div>

      <PaymentStatusModal
        isOpen={showStatusModal}
        onClose={() => setShowStatusModal(false)}
        paymentResult={paymentResult}
        orderId={orderId || undefined}
      />
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <WebGLShader />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 min-h-screen flex items-center justify-center">
          <div className="w-full max-w-4xl mx-auto p-4 animate-pulse">
            <LiquidGlassContainer className="bg-gray-900/30 rounded-3xl h-96 border border-amber-400/20" colorOverlay="none">
              <div className="flex items-center justify-center h-full">
                <div className="text-white">Loading...</div>
              </div>
            </LiquidGlassContainer>
          </div>
        </div>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  )
}