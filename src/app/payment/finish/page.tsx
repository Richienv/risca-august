'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { PaymentStatusResponse } from '@/types/payment'

function PaymentFinishContent() {
  const searchParams = useSearchParams()
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatusResponse | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const orderId = searchParams.get('order_id')
    
    if (orderId) {
      checkPaymentStatus(orderId)
    } else {
      setError('Order ID not found')
      setIsLoading(false)
    }
  }, [searchParams])

  const checkPaymentStatus = async (orderId: string) => {
    try {
      const response = await fetch(`/api/midtrans/status?order_id=${orderId}`)
      if (!response.ok) {
        throw new Error('Failed to check payment status')
      }
      const data: PaymentStatusResponse = await response.json()
      setPaymentStatus(data)
    } catch (err) {
      console.error('Error checking payment status:', err)
      setError('Failed to verify payment status')
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <Card className="w-full max-w-md bg-black border-gray-800">
          <CardContent className="flex flex-col items-center py-8">
            <Loader2 className="h-12 w-12 animate-spin text-blue-500 mb-4" />
            <p className="text-center text-gray-300">Memverifikasi pembayaran...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <Card className="w-full max-w-md bg-black border-gray-800">
          <CardHeader>
            <CardTitle className="text-center text-red-400">Terjadi Kesalahan</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-300 mb-6">{error}</p>
            <Link href="/">
              <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white border-0">Kembali ke Beranda</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  const isSuccess = paymentStatus?.transaction_status === 'settlement' || 
                   paymentStatus?.transaction_status === 'capture'

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <Card className="w-full max-w-md bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-2 text-green-400">
            <CheckCircle className="h-6 w-6" />
            {isSuccess ? 'Pembayaran Berhasil!' : 'Pembayaran Selesai'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-gray-300 mb-4">
              {isSuccess 
                ? 'Terima kasih! Pembayaran Anda telah berhasil diproses.'
                : 'Status pembayaran telah diperbarui.'
              }
            </p>
          </div>

          {paymentStatus && (
            <div className="space-y-3 text-sm bg-gray-800 p-4 rounded-lg border border-gray-700">
              <div className="flex justify-between">
                <span className="text-gray-400">ID Transaksi:</span>
                <span className="font-mono text-xs text-gray-300">{paymentStatus.transaction_id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">ID Pesanan:</span>
                <span className="font-mono text-xs text-gray-300">{paymentStatus.order_id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Status:</span>
                <span className="capitalize font-medium text-white">{paymentStatus.transaction_status}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Metode:</span>
                <span className="capitalize text-gray-300">{paymentStatus.payment_type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Total:</span>
                <span className="font-semibold text-white">
                  {new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                    minimumFractionDigits: 0
                  }).format(parseInt(paymentStatus.gross_amount))}
                </span>
              </div>
            </div>
          )}

          <div className="space-y-3">
            <Link href="/" className="block">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white border-0">
                Kembali ke Beranda
              </Button>
            </Link>
            
            {isSuccess && (
              <p className="text-xs text-gray-400 text-center">
                Konfirmasi pembayaran akan dikirimkan ke email Anda dalam 5-10 menit.
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default function PaymentFinishPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-black">
        <Card className="w-full max-w-md bg-black border-gray-800">
          <CardContent className="flex flex-col items-center py-8">
            <Loader2 className="h-12 w-12 animate-spin text-blue-500 mb-4" />
            <p className="text-center text-gray-300">Loading...</p>
          </CardContent>
        </Card>
      </div>
    }>
      <PaymentFinishContent />
    </Suspense>
  )
}