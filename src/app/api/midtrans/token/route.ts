import { NextRequest, NextResponse } from 'next/server'
import { Snap } from 'midtrans-client'

const snap = new Snap({
  isProduction: process.env.MIDTRANS_IS_PRODUCTION === 'true',
  serverKey: process.env.MIDTRANS_SERVER_KEY!,
  clientKey: process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY!
})

export interface PaymentTokenRequest {
  packageType: 'starter' | 'professional' | 'premium'
  customerDetails: {
    first_name: string
    last_name?: string
    email: string
    phone: string
  }
}

export interface PaymentTokenResponse {
  token: string
  redirect_url: string
}

const packagePrices = {
  starter: 10000000,
  professional: 17000000,
  premium: 25000000
}

const packageNames = {
  starter: 'Starter Package',
  professional: 'Professional Package', 
  premium: 'Premium Package'
}

export async function POST(request: NextRequest) {
  try {
    const body: PaymentTokenRequest = await request.json()
    
    if (!body.packageType || !body.customerDetails) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const orderId = `RISCA-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    const grossAmount = packagePrices[body.packageType]

    const parameter = {
      transaction_details: {
        order_id: orderId,
        gross_amount: grossAmount
      },
      credit_card: {
        secure: true
      },
      item_details: [
        {
          id: body.packageType,
          price: grossAmount,
          quantity: 1,
          name: packageNames[body.packageType]
        }
      ],
      customer_details: {
        first_name: body.customerDetails.first_name,
        last_name: body.customerDetails.last_name || '',
        email: body.customerDetails.email,
        phone: body.customerDetails.phone
      },
      callbacks: {
        finish: `${process.env.NEXT_PUBLIC_APP_URL}/payment/finish`,
        error: `${process.env.NEXT_PUBLIC_APP_URL}/payment/error`,
        pending: `${process.env.NEXT_PUBLIC_APP_URL}/payment/pending`
      }
    }

    const transaction = await snap.createTransaction(parameter)
    
    return NextResponse.json({
      token: transaction.token,
      redirect_url: transaction.redirect_url
    } as PaymentTokenResponse)

  } catch (error) {
    console.error('Midtrans token generation error:', error)
    return NextResponse.json(
      { error: 'Failed to generate payment token' },
      { status: 500 }
    )
  }
}