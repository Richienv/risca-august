'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { CheckCircle, XCircle, Clock, Loader2, AlertCircle } from 'lucide-react'
import { PaymentState, PaymentStatusResponse } from '@/types/payment'

interface PaymentStatusModalProps {
  isOpen: boolean
  onClose: () => void
  paymentResult?: any
  orderId?: string
}

export default function PaymentStatusModal({
  isOpen,
  onClose,
  paymentResult,
  orderId
}: PaymentStatusModalProps) {
  const [status, setStatus] = useState<PaymentState>('processing')
  const [statusData, setStatusData] = useState<PaymentStatusResponse | null>(null)
  const [error, setError] = useState<string>('')

  const checkPaymentStatus = async (orderIdToCheck: string) => {
    try {
      const response = await fetch(`/api/midtrans/status?order_id=${orderIdToCheck}`)
      if (!response.ok) {
        throw new Error('Failed to check payment status')
      }
      const data: PaymentStatusResponse = await response.json()
      setStatusData(data)
      
      // Update status based on transaction status
      if (data.transaction_status === 'settlement' || data.transaction_status === 'capture') {
        setStatus('success')
      } else if (data.transaction_status === 'pending') {
        setStatus('processing')
      } else if (data.transaction_status === 'deny' || data.transaction_status === 'cancel' || data.transaction_status === 'expire') {
        setStatus('error')
      }
    } catch (err) {
      console.error('Error checking payment status:', err)
      setError('Gagal memeriksa status pembayaran')
      setStatus('error')
    }
  }

  useEffect(() => {
    if (isOpen) {
      if (paymentResult) {
        // Handle immediate result from Snap
        if (paymentResult.transaction_status === 'settlement' || 
            paymentResult.transaction_status === 'capture') {
          setStatus('success')
          setStatusData({
            order_id: paymentResult.order_id,
            transaction_id: paymentResult.transaction_id,
            transaction_status: paymentResult.transaction_status,
            fraud_status: paymentResult.fraud_status || 'accept',
            status_message: paymentResult.status_message || 'Payment successful',
            gross_amount: paymentResult.gross_amount,
            payment_type: paymentResult.payment_type,
            transaction_time: paymentResult.transaction_time,
            status_code: paymentResult.status_code
          })
        } else if (paymentResult.transaction_status === 'pending') {
          setStatus('processing')
        } else {
          setStatus('error')
        }
      } else if (orderId) {
        // Check status via API
        checkPaymentStatus(orderId)
      }
    } else {
      // Reset state when modal closes
      setStatus('processing')
      setStatusData(null)
      setError('')
    }
  }, [isOpen, paymentResult, orderId])

  const getStatusIcon = () => {
    switch (status) {
      case 'success':
        return <CheckCircle className="h-16 w-16 text-green-500" />
      case 'error':
      case 'cancelled':
        return <XCircle className="h-16 w-16 text-red-500" />
      case 'processing':
        return <Loader2 className="h-16 w-16 text-blue-500 animate-spin" />
      default:
        return <Clock className="h-16 w-16 text-yellow-500" />
    }
  }

  const getStatusTitle = () => {
    switch (status) {
      case 'success':
        return 'Pembayaran Berhasil!'
      case 'error':
        return 'Pembayaran Gagal'
      case 'cancelled':
        return 'Pembayaran Dibatalkan'
      case 'processing':
        return 'Memproses Pembayaran...'
      default:
        return 'Status Pembayaran'
    }
  }

  const getStatusMessage = () => {
    if (error) return error
    
    switch (status) {
      case 'success':
        return 'Terima kasih! Pembayaran Anda telah berhasil diproses. Kami akan mengirimkan konfirmasi ke email Anda.'
      case 'error':
        return statusData?.status_message || 'Terjadi kesalahan saat memproses pembayaran. Silakan coba lagi atau hubungi customer service.'
      case 'cancelled':
        return 'Pembayaran dibatalkan. Anda dapat mencoba lagi kapan saja.'
      case 'processing':
        return 'Sedang memproses pembayaran Anda. Mohon tunggu sebentar...'
      default:
        return 'Memeriksa status pembayaran...'
    }
  }

  const getStatusColor = () => {
    switch (status) {
      case 'success':
        return 'text-green-300 bg-green-900/30 border-green-700/30'
      case 'error':
      case 'cancelled':
        return 'text-red-300 bg-red-900/30 border-red-700/30'
      case 'processing':
        return 'text-blue-300 bg-blue-900/30 border-blue-700/30'
      default:
        return 'text-gray-300 bg-gray-800/30 border-gray-700/30'
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-black border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-center text-white">
            {getStatusTitle()}
          </DialogTitle>
          <DialogDescription className="text-center text-gray-400">
            Status pembayaran Anda
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col items-center space-y-6 py-4">
          {getStatusIcon()}
          
          <div className={`p-4 rounded-lg border ${getStatusColor()} text-center`}>
            <p className="text-sm leading-relaxed">
              {getStatusMessage()}
            </p>
          </div>

          {statusData && status === 'success' && (
            <div className="w-full space-y-2 text-sm bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between">
                <span className="text-gray-400">ID Transaksi:</span>
                <span className="font-mono text-xs text-gray-300">{statusData.transaction_id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">ID Pesanan:</span>
                <span className="font-mono text-xs text-gray-300">{statusData.order_id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Metode Pembayaran:</span>
                <span className="capitalize text-gray-300">{statusData.payment_type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Total:</span>
                <span className="font-semibold text-white">
                  {new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                    minimumFractionDigits: 0
                  }).format(parseInt(statusData.gross_amount))}
                </span>
              </div>
            </div>
          )}

          {status === 'processing' && orderId && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => checkPaymentStatus(orderId)}
              className="text-xs bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              <AlertCircle className="mr-2 h-3 w-3" />
              Periksa Status
            </Button>
          )}

          <div className="flex gap-3 w-full">
            {status === 'error' && (
              <Button
                variant="outline"
                onClick={onClose}
                className="flex-1 bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Coba Lagi
              </Button>
            )}
            <Button
              onClick={onClose}
              className={`${status === 'error' ? 'flex-1' : 'w-full'} ${
                status === 'success' 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400'
              }`}
            >
              {status === 'success' ? 'Selesai' : status === 'processing' ? 'Tutup' : 'OK'}
            </Button>
          </div>

          {status === 'success' && (
            <p className="text-xs text-gray-400 text-center">
              Konfirmasi pembayaran akan dikirimkan ke email Anda dalam 5-10 menit.
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}