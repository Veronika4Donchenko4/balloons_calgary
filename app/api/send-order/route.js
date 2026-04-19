import { NextResponse } from 'next/server'

export async function POST(request) {
  const orderData = await request.json()

  // TODO: integrate with email service (Resend, Nodemailer, etc.)
  // For now, log the order and return success
  console.log('New order received:', JSON.stringify(orderData, null, 2))

  return NextResponse.json({ success: true, message: 'Order received' })
}
