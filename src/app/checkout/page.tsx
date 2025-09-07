'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { ArrowLeft, CreditCard, Shield, Check } from 'lucide-react'
import { PackageType, PACKAGES, isValidEmail, isValidPhone, formatPhoneNumber, PaymentFormData } from '@/types/payment'
import { usePayment } from '@/hooks/usePayment'
import PaymentStatusModal from '@/components/payment/PaymentStatusModal'
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
    <div className="min-h-screen bg-black text-white py-8">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <Link 
              href="/#pricing-section"
              className="text-gray-400 hover:text-pink-400 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-2xl font-bold text-white">Checkout</h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="order-2 lg:order-1">
            <Card className="bg-black border-gray-800">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-white text-lg">
                  <Shield className="h-4 w-4 text-green-500" />
                  Ringkasan Pesanan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Package Info */}
                <div className="bg-transparent p-4 rounded-lg border border-gray-700/50">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-base text-white">{packageInfo.name}</h3>
                      <p className="text-sm text-gray-400">{packageInfo.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg sm:text-xl font-bold text-white">{packageInfo.monthlyPrice}</p>
                      <p className="text-xs text-gray-500">per bulan</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="grid gap-1 max-h-32 overflow-y-auto">
                      {packageInfo.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Check className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-gray-400">{feature}</span>
                        </div>
                      ))}
                      {packageInfo.features.length > 4 && (
                        <p className="text-xs text-gray-500 italic ml-5">
                          +{packageInfo.features.length - 4} fitur lainnya
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-2 border-t border-gray-800 pt-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="text-white">{packageInfo.monthlyPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Biaya Admin</span>
                    <span className="text-white">GRATIS</span>
                  </div>
                  <hr className="border-gray-800" />
                  <div className="flex justify-between font-bold">
                    <span className="text-white">Total</span>
                    <span className="text-white">{packageInfo.monthlyPrice}</span>
                  </div>
                </div>

                {/* Security Info */}
                <div className="bg-yellow-900/20 p-3 rounded-lg border border-yellow-700/30">
                  <div className="flex items-center gap-2">
                    <Shield className="h-3 w-3 text-yellow-500" />
                    <span className="text-xs text-yellow-400">Pembayaran aman dengan Midtrans SSL</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Form */}
          <div className="order-1 lg:order-2">
            <Card className="bg-black border-gray-800">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-white text-lg">
                  <CreditCard className="h-4 w-4" />
                  Informasi Pembayaran
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-400 text-sm">Nama Depan *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        placeholder="John"
                        className={`bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-pink-500 focus:ring-pink-500 h-9 ${errors.firstName ? 'border-red-500' : ''}`}
                      />
                      {errors.firstName && (
                        <p className="text-xs text-red-400 mt-1">{errors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gray-400 text-sm">Nama Belakang</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        placeholder="Doe"
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-pink-500 focus:ring-pink-500 h-9"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-400 text-sm">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="john@example.com"
                      className={`bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-pink-500 focus:ring-pink-500 h-9 ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-gray-300">Nomor Telepon *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="08123456789"
                      className={`bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-pink-500 focus:ring-pink-500 ${errors.phone ? 'border-red-500' : ''}`}
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

                <Button
                  onClick={handlePayment}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 text-white py-3 text-base font-semibold border-0 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  size="lg"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Memproses Pembayaran...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      Bayar Sekarang - {packageInfo.monthlyPrice}
                    </div>
                  )}
                </Button>

                <p className="text-xs text-gray-400 text-center">
                  Dengan melanjutkan pembayaran, Anda menyetujui{' '}
                  <Link href="#" className="text-blue-400 hover:underline">syarat dan ketentuan</Link> serta{' '}
                  <Link href="#" className="text-blue-400 hover:underline">kebijakan privasi</Link> kami.
                </p>
              </CardContent>
            </Card>
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
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto p-4 animate-pulse">
          <div className="bg-gray-900 rounded-lg h-96 border border-gray-800"></div>
        </div>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  )
}