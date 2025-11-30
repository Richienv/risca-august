// Payment package types
export type PackageType = 'free' | 'paid'

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
  free: 0,
  paid: 10000000
}

// Package information constants
export const PACKAGES: Record<PackageType, PackageInfo> = {
  free: {
    type: 'free',
    name: 'Starter Partner',
    price: 0,
    monthlyPrice: 'GRATIS',
    description: 'Mulai perjalanan karirmu sebagai Financial Consultant dengan ritme yang fleksibel.',
    features: [
      'Wanita/Pria',
      'Usia 17-35 tahun',
      'Minimal pendidikan SMA/D1',
      'Lokasi di Jabodetabek',
      'Potensi Income: Unlimited (Sama)',
      'Bonus Referral: 25% (Sama)',
      'Reward Trip: Jalan-jalan Gratis (Sama)',
      'Allowance: Rp 5 Jt/Bln (Target 5 Jt) (Sama)',
      'Mentoring: Intensif & Full Support (Sama)',
      'Kecepatan: Tergantung Diri Sendiri',
      'Guarantee: Tidak Ada Resiko'
    ]
  },
  paid: {
    type: 'paid',
    name: 'Business Partner',
    price: 10000000,
    monthlyPrice: 'Rp 10 Jt',
    description: 'Akses penuh ke sistem bisnis dengan percepatan, mentoring intensif, dan jaminan keberhasilan.',
    features: [
      'Ingin percepatan income & karir',
      'Siap mengikuti mentoring intensif',
      'Fokus mengejar hasil cepat',
      'Komitmen tinggi untuk sukses',
      'Potensi Income: Unlimited (Sama)',
      'Bonus Referral: 25% (Sama)',
      'Reward Trip: Jalan-jalan Gratis (Sama)',
      'Allowance: Rp 5 Jt/Bln (Target 5 Jt) (Sama)',
      'Mentoring: Intensif & Full Support (Sama)',
      'Kecepatan: Fast Track (3 Bulan)',
      'Guarantee: Uang Kembali 100%'
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