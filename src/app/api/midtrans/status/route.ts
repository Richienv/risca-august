import { NextRequest, NextResponse } from 'next/server'
import { CoreApi } from 'midtrans-client'

const coreApi = new CoreApi({
  isProduction: process.env.MIDTRANS_IS_PRODUCTION === 'true',
  serverKey: process.env.MIDTRANS_SERVER_KEY!,
  clientKey: process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY!
})

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

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const orderId = searchParams.get('order_id')
    
    if (!orderId) {
      return NextResponse.json(
        { error: 'Order ID is required' },
        { status: 400 }
      )
    }

    const statusResponse = await coreApi.transaction.status(orderId)
    
    const response: PaymentStatusResponse = {
      order_id: statusResponse.order_id,
      transaction_id: statusResponse.transaction_id,
      transaction_status: statusResponse.transaction_status,
      fraud_status: statusResponse.fraud_status || 'accept',
      status_message: statusResponse.status_message,
      gross_amount: statusResponse.gross_amount,
      payment_type: statusResponse.payment_type,
      transaction_time: statusResponse.transaction_time,
      status_code: statusResponse.status_code
    }

    return NextResponse.json(response)

  } catch (error) {
    console.error('Payment status check error:', error)
    
    if (error instanceof Error && error.message.includes('404')) {
      return NextResponse.json(
        { error: 'Transaction not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(
      { error: 'Failed to check payment status' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { order_id, action } = body
    
    if (!order_id) {
      return NextResponse.json(
        { error: 'Order ID is required' },
        { status: 400 }
      )
    }

    let result
    
    switch (action) {
      case 'cancel':
        result = await coreApi.transaction.cancel(order_id)
        break
      case 'approve':
        result = await coreApi.transaction.approve(order_id)
        break
      case 'deny':
        result = await coreApi.transaction.deny(order_id)
        break
      default:
        return NextResponse.json(
          { error: 'Invalid action. Use: cancel, approve, or deny' },
          { status: 400 }
        )
    }

    return NextResponse.json({
      order_id: result.order_id,
      transaction_status: result.transaction_status,
      status_message: result.status_message
    })

  } catch (error) {
    console.error('Transaction action error:', error)
    return NextResponse.json(
      { error: 'Failed to perform transaction action' },
      { status: 500 }
    )
  }
}