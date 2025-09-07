// Payment package types
export type PackageType = 'starter' | 'professional' | 'premium'

// Customer details interface
export interface CustomerDetails {
  first_name: string
  last_name?: string
  email: string
  phone: string
}

// Package information
export interface PackageInfo {
  type: PackageType
  name: string
  price: number
  monthlyPrice: string
  features: string[]
  description: string
}

// Payment token request
export interface PaymentTokenRequest {
  packageType: PackageType
  customerDetails: CustomerDetails
}

// Payment token response
export interface PaymentTokenResponse {
  token: string
  redirect_url: string
}

// Payment status response
export interface PaymentStatusResponse {
  order_id: string
  transaction_id: string
  transaction_status: string
  fraud_status: string
  status_message: string
  gross_amount: string
  payment_type: string
  transaction_time: string
  status_code: string
}

// Midtrans notification interface
export interface MidtransNotification {
  transaction_time: string
  transaction_status: string
  transaction_id: string
  status_message: string
  status_code: string
  signature_key: string
  payment_type: string
  order_id: string
  merchant_id: string
  gross_amount: string
  fraud_status: string
  currency: string
}

// Payment states for UI
export type PaymentState = 'idle' | 'processing' | 'success' | 'error' | 'cancelled'

// Payment form data
export interface PaymentFormData {
  packageType: PackageType
  firstName: string
  lastName: string
  email: string
  phone: string
}

// Snap payment options
export interface SnapPaymentOptions {
  token: string
  onSuccess?: (result: any) => void
  onPending?: (result: any) => void
  onError?: (result: any) => void
  onClose?: () => void
}

// Package pricing constants
export const PACKAGE_PRICES: Record<PackageType, number> = {
  starter: 10000000,
  professional: 17000000,
  premium: 25000000
}

// Package information constants
export const PACKAGES: Record<PackageType, PackageInfo> = {
  starter: {
    type: 'starter',
    name: 'Starter Package',
    price: 10000000,
    monthlyPrice: 'Rp 10 Jt / bulan',
    description: '100% Cashback + Proteksi Keluarga',
    features: [
      'Cashback 100% untuk beli asuransi keluarga',
      'Proteksi lengkap tanpa keluar uang tambahan',
      'Income Rp 2.335.000/bulan (komisi 23,35%)',
      'Program 2 tahun dengan hasil pasti',
      'Target 4 orang referral untuk maksimal hasil',
      'Bonus Logam Mulia 5 Gram senilai 10 Jt',
      'Bonus iPad senilai 6 Jt',
      'Total bonus 16 Jt dalam 1-3 bulan'
    ]
  },
  professional: {
    type: 'professional',
    name: 'Professional Package',
    price: 17000000,
    monthlyPrice: 'Rp 17 Jt / bulan',
    description: '100% Cashback + Proteksi Premium',
    features: [
      'Cashback 100% untuk proteksi keluarga premium',
      'Asuransi lengkap tanpa biaya tambahan',
      'Income Rp 3.969.500/bulan (komisi 23,35%)',
      'Program 2 tahun dengan hasil terjamin',
      'Target hanya 2 orang referral (lebih mudah)',
      'Bonus Logam Mulia 5 Gram senilai 10 Jt',
      'Bonus iPad senilai 6 Jt',
      'Total bonus 16 Jt dalam 1-3 bulan',
      'Income lebih stabil dan besar',
      'Target referral lebih sedikit = lebih realistis'
    ]
  },
  premium: {
    type: 'premium',
    name: 'Premium Package',
    price: 25000000,
    monthlyPrice: 'Rp 25 Jt / bulan',
    description: '100% Cashback + Proteksi VIP',
    features: [
      'Cashback 100% untuk proteksi VIP keluarga',
      'Proteksi terlengkap tanpa keluar uang ekstra',
      'Income Rp 5.837.500/bulan (komisi 23,35%)',
      'Program 2 tahun dengan hasil maksimal',
      'TANPA target referral (paling mudah dicapai)',
      'Bonus Logam Mulia 5 Gram senilai 10 Jt',
      'Bonus iPad senilai 6 Jt',
      'Total bonus 16 Jt dalam 1-3 bulan',
      'Income tertinggi dari semua paket',
      'Paling mudah dicapai karena tanpa syarat referral'
    ]
  }
}

// Utility functions
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^(\+62|62|0)8[1-9][0-9]{6,9}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

export const formatPhoneNumber = (phone: string): string => {
  // Remove spaces and format to Indonesian phone number
  const cleaned = phone.replace(/\s/g, '')
  if (cleaned.startsWith('0')) {
    return '+62' + cleaned.substring(1)
  } else if (cleaned.startsWith('62')) {
    return '+' + cleaned
  } else if (cleaned.startsWith('+62')) {
    return cleaned
  }
  return '+62' + cleaned
}