import { NextRequest, NextResponse } from 'next/server'
import { CoreApi } from 'midtrans-client'
import crypto from 'crypto'

const coreApi = new CoreApi({
  isProduction: process.env.MIDTRANS_IS_PRODUCTION === 'true',
  serverKey: process.env.MIDTRANS_SERVER_KEY!,
  clientKey: process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY!
})

interface MidtransNotification {
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

function verifySignature(notification: MidtransNotification): boolean {
  const { order_id, status_code, gross_amount, signature_key } = notification
  const serverKey = process.env.MIDTRANS_SERVER_KEY!
  
  const hash = crypto
    .createHash('sha512')
    .update(order_id + status_code + gross_amount + serverKey)
    .digest('hex')
    
  return hash === signature_key
}

export async function POST(request: NextRequest) {
  try {
    const notification: MidtransNotification = await request.json()
    
    // Verify the signature
    if (!verifySignature(notification)) {
      console.error('Invalid signature for notification:', notification.order_id)
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      )
    }

    const { order_id, transaction_status, fraud_status } = notification

    console.log(`Payment notification received for order: ${order_id}`)
    console.log(`Transaction status: ${transaction_status}`)
    console.log(`Fraud status: ${fraud_status}`)

    // Handle different transaction statuses
    if (transaction_status === 'capture') {
      if (fraud_status === 'challenge') {
        // Transaction is challenged, you need to take action
        console.log(`Transaction ${order_id} is challenged`)
      } else if (fraud_status === 'accept') {
        // Transaction is accepted
        console.log(`Transaction ${order_id} is accepted`)
        // Here you can update your database, send confirmation email, etc.
      }
    } else if (transaction_status === 'settlement') {
      // Transaction is settled (for non-card payments)
      console.log(`Transaction ${order_id} is settled`)
      // Here you can update your database, send confirmation email, etc.
    } else if (transaction_status === 'pending') {
      // Transaction is pending
      console.log(`Transaction ${order_id} is pending`)
    } else if (transaction_status === 'deny') {
      // Transaction is denied
      console.log(`Transaction ${order_id} is denied`)
    } else if (transaction_status === 'cancel' || transaction_status === 'expire') {
      // Transaction is cancelled or expired
      console.log(`Transaction ${order_id} is ${transaction_status}`)
    }

    // You should implement your business logic here
    // For example:
    // - Update order status in database
    // - Send confirmation email to customer
    // - Update inventory
    // - Log transaction for analytics

    return NextResponse.json({ status: 'OK' })

  } catch (error) {
    console.error('Webhook processing error:', error)
    return NextResponse.json(
      { error: 'Failed to process webhook' },
      { status: 500 }
    )
  }
}