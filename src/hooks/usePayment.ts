'use client'

import { useState, useCallback, useEffect } from 'react'
import { 
  PaymentState, 
  PaymentTokenRequest, 
  PaymentTokenResponse, 
  PaymentStatusResponse,
  PackageType 
} from '@/types/payment'

export interface UsePaymentOptions {
  onSuccess?: (result: any) => void
  onError?: (error: any) => void
  onPending?: (result: any) => void
  onClose?: () => void
}

export interface UsePaymentReturn {
  paymentState: PaymentState
  isLoading: boolean
  error: string | null
  paymentResult: any | null
  orderId: string | null
  initiatePayment: (request: PaymentTokenRequest) => Promise<void>
  checkPaymentStatus: (orderId: string) => Promise<PaymentStatusResponse | null>
  resetPayment: () => void
}

export function usePayment(options: UsePaymentOptions = {}): UsePaymentReturn {
  const [paymentState, setPaymentState] = useState<PaymentState>('idle')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [paymentResult, setPaymentResult] = useState<any | null>(null)
  const [orderId, setOrderId] = useState<string | null>(null)

  const resetPayment = useCallback(() => {
    setPaymentState('idle')
    setIsLoading(false)
    setError(null)
    setPaymentResult(null)
    setOrderId(null)
  }, [])

  const checkPaymentStatus = useCallback(async (orderIdToCheck: string): Promise<PaymentStatusResponse | null> => {
    try {
      const response = await fetch(`/api/midtrans/status?order_id=${orderIdToCheck}`)
      if (!response.ok) {
        throw new Error(`Failed to check payment status: ${response.statusText}`)
      }
      const data: PaymentStatusResponse = await response.json()
      
      // Update payment state based on status
      if (data.transaction_status === 'settlement' || data.transaction_status === 'capture') {
        setPaymentState('success')
      } else if (data.transaction_status === 'pending') {
        setPaymentState('processing')
      } else if (data.transaction_status === 'deny' || data.transaction_status === 'cancel' || data.transaction_status === 'expire') {
        setPaymentState('error')
      }
      
      return data
    } catch (err) {
      console.error('Error checking payment status:', err)
      setError(err instanceof Error ? err.message : 'Failed to check payment status')
      setPaymentState('error')
      return null
    }
  }, [])

  const loadMidtransScript = useCallback((): Promise<void> => {
    return new Promise((resolve, reject) => {
      // Check if script is already loaded
      if (window.snap) {
        resolve()
        return
      }

      const existingScript = document.getElementById('midtrans-snap')
      if (existingScript) {
        existingScript.onload = () => resolve()
        return
      }

      const script = document.createElement('script')
      script.id = 'midtrans-snap'
      script.src = process.env.NEXT_PUBLIC_MIDTRANS_SNAP_URL!
      script.setAttribute('data-client-key', process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY!)
      
      script.onload = () => {
        resolve()
      }
      
      script.onerror = () => {
        reject(new Error('Failed to load Midtrans Snap script'))
      }
      
      document.head.appendChild(script)
    })
  }, [])

  const initiatePayment = useCallback(async (request: PaymentTokenRequest) => {
    try {
      setIsLoading(true)
      setPaymentState('processing')
      setError(null)

      // Generate payment token
      const response = await fetch('/api/midtrans/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`)
      }

      const tokenData: PaymentTokenResponse = await response.json()
      
      // Load Midtrans Snap script
      await loadMidtransScript()

      // Initiate Snap payment
      // @ts-ignore
      window.snap.pay(tokenData.token, {
        onSuccess: (result: any) => {
          console.log('Payment success:', result)
          setPaymentState('success')
          setPaymentResult(result)
          setOrderId(result.order_id)
          setIsLoading(false)
          options.onSuccess?.(result)
        },
        onPending: (result: any) => {
          console.log('Payment pending:', result)
          setPaymentState('processing')
          setPaymentResult(result)
          setOrderId(result.order_id)
          setIsLoading(false)
          options.onPending?.(result)
        },
        onError: (result: any) => {
          console.error('Payment error:', result)
          setPaymentState('error')
          setPaymentResult(result)
          setError(result.status_message || 'Payment failed')
          setIsLoading(false)
          options.onError?.(result)
        },
        onClose: () => {
          console.log('Payment popup closed')
          if (paymentState === 'processing') {
            setPaymentState('cancelled')
          }
          setIsLoading(false)
          options.onClose?.()
        }
      })

    } catch (err) {
      console.error('Payment initiation error:', err)
      const errorMessage = err instanceof Error ? err.message : 'Failed to initiate payment'
      setError(errorMessage)
      setPaymentState('error')
      setIsLoading(false)
      options.onError?.(err)
    }
  }, [paymentState, loadMidtransScript, options])

  return {
    paymentState,
    isLoading,
    error,
    paymentResult,
    orderId,
    initiatePayment,
    checkPaymentStatus,
    resetPayment
  }
}

// Hook for managing payment history/tracking
export interface PaymentRecord {
  orderId: string
  packageType: PackageType
  amount: number
  status: string
  timestamp: number
  customerEmail: string
}

export function usePaymentHistory() {
  const [paymentHistory, setPaymentHistory] = useState<PaymentRecord[]>([])

  const addPaymentRecord = useCallback((record: PaymentRecord) => {
    setPaymentHistory(prev => [record, ...prev])
  }, [])

  const updatePaymentRecord = useCallback((orderId: string, updates: Partial<PaymentRecord>) => {
    setPaymentHistory(prev => 
      prev.map(record => 
        record.orderId === orderId 
          ? { ...record, ...updates }
          : record
      )
    )
  }, [])

  const getPaymentRecord = useCallback((orderId: string) => {
    return paymentHistory.find(record => record.orderId === orderId)
  }, [paymentHistory])

  const clearPaymentHistory = useCallback(() => {
    setPaymentHistory([])
  }, [])

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedHistory = localStorage.getItem('payment-history')
      if (savedHistory) {
        setPaymentHistory(JSON.parse(savedHistory))
      }
    } catch (err) {
      console.error('Failed to load payment history:', err)
    }
  }, [])

  // Save to localStorage when history changes
  useEffect(() => {
    try {
      localStorage.setItem('payment-history', JSON.stringify(paymentHistory))
    } catch (err) {
      console.error('Failed to save payment history:', err)
    }
  }, [paymentHistory])

  return {
    paymentHistory,
    addPaymentRecord,
    updatePaymentRecord,
    getPaymentRecord,
    clearPaymentHistory
  }
}

// Global type for window.snap
declare global {
  interface Window {
    snap: {
      pay: (token: string, options: {
        onSuccess?: (result: any) => void
        onPending?: (result: any) => void
        onError?: (result: any) => void
        onClose?: () => void
      }) => void
    }
  }
}