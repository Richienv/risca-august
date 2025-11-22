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
    name: 'Free Entry',
    price: 0,
    monthlyPrice: 'GRATIS',
    description: 'Bergabung tanpa biaya dengan memenuhi kriteria yang ditentukan',
    features: [
      'Wanita/Pria (prefer wanita)',
      'Usia 20-40 tahun',
      'Tidak perlu pengalaman kerja, cukup growth mindset',
      'Fokus dan siap memberikan semua untuk sukses',
      'Minimal pendidikan SMA/D1',
      'Lokasi di Jabodetabek',
      '(Jika di luar Jakarta) bersedia mengikuti Zoom'
    ]
  },
  paid: {
    type: 'paid',
    name: 'Paid Commitment',
    price: 10000000,
    monthlyPrice: 'Rp 10 Jt',
    description: 'Komitmen fee yang akan dikembalikan 100% setelah 2 bulan',
    features: [
      'Wanita/Pria (prefer wanita)',
      'Usia 20-40 tahun',
      'Tidak perlu pengalaman kerja, cukup growth mindset',
      'Fokus dan siap memberikan semua untuk sukses',
      'Minimal pendidikan SMA/D1',
      'Lokasi di Jabodetabek',
      '(Jika di luar Jakarta) bersedia mengikuti Zoom',
      'Akses penuh ke semua program pembelajaran',
      'Pengembalian commitment fee jika dalam 2 bulan berhasil capai target',
      'Jika tidak berhasil, akan diinvestasikan dan seluruh hasil + 10 juta tetap milik kamu',
      'Immediate private mentoring & blueprint to success (tinggal copy dan jalankan)',
      'Dapat cashback dan bonus',
      'Chance to win FREE iPad'
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