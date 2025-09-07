'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Loader2, CreditCard } from 'lucide-react'
import { PaymentFormData, PackageType, PACKAGES, isValidEmail, isValidPhone, formatPhoneNumber } from '@/types/payment'

interface PaymentButtonProps {
  packageType: PackageType
  className?: string
  children: React.ReactNode
  onPaymentStart?: () => void
  onPaymentSuccess?: (result: any) => void
  onPaymentError?: (error: any) => void
  onPaymentClose?: () => void
}

export default function PaymentButton({
  packageType,
  className = '',
  children,
  onPaymentStart,
  onPaymentSuccess,
  onPaymentError,
  onPaymentClose
}: PaymentButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Partial<PaymentFormData>>({})
  const [formData, setFormData] = useState<PaymentFormData>({
    packageType,
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })

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

    setIsLoading(true)
    onPaymentStart?.()

    try {
      // Generate payment token
      const response = await fetch('/api/midtrans/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          packageType,
          customerDetails: {
            first_name: formData.firstName,
            last_name: formData.lastName || '',
            email: formData.email,
            phone: formatPhoneNumber(formData.phone)
          }
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate payment token')
      }

      const { token } = await response.json()

      // Load Midtrans Snap
      const snapScript = document.createElement('script')
      snapScript.src = process.env.NEXT_PUBLIC_MIDTRANS_SNAP_URL!
      snapScript.setAttribute('data-client-key', process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY!)
      
      snapScript.onload = () => {
        // @ts-ignore
        window.snap.pay(token, {
          onSuccess: (result: any) => {
            console.log('Payment success:', result)
            onPaymentSuccess?.(result)
            setIsOpen(false)
            setFormData({
              packageType,
              firstName: '',
              lastName: '',
              email: '',
              phone: ''
            })
          },
          onPending: (result: any) => {
            console.log('Payment pending:', result)
            setIsOpen(false)
          },
          onError: (result: any) => {
            console.error('Payment error:', result)
            onPaymentError?.(result)
          },
          onClose: () => {
            console.log('Payment popup closed')
            onPaymentClose?.()
            setIsLoading(false)
          }
        })
      }

      document.head.appendChild(snapScript)

    } catch (error) {
      console.error('Payment initiation error:', error)
      onPaymentError?.(error)
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className={className} disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            children
          )}
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Pembayaran {packageInfo.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">{packageInfo.name}</span>
              <span className="text-lg font-bold text-red-600">{packageInfo.monthlyPrice}</span>
            </div>
            <p className="text-sm text-gray-600">{packageInfo.description}</p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">Nama Depan *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="John"
                  className={errors.firstName ? 'border-red-500' : ''}
                />
                {errors.firstName && (
                  <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>
                )}
              </div>
              <div>
                <Label htmlFor="lastName">Nama Belakang</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="john@example.com"
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <Label htmlFor="phone">Nomor Telepon *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="08123456789"
                className={errors.phone ? 'border-red-500' : ''}
              />
              {errors.phone && (
                <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          <Button
            onClick={handlePayment}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Memproses Pembayaran...
              </>
            ) : (
              <>
                <CreditCard className="mr-2 h-4 w-4" />
                Bayar Sekarang
              </>
            )}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            Dengan melanjutkan pembayaran, Anda menyetujui syarat dan ketentuan yang berlaku.
            Pembayaran aman menggunakan Midtrans.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}