import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { stripeCheckout } from '@/lib/stripe';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const amount = parseFloat(body.amount);
    const userId = body.userId;

    if (isNaN(amount) || amount <= 0) {
      return NextResponse.json(
        { success: false, message: 'Invalid donation amount' },
        { status: 400 }
      );
    }

    const user = await prisma.user.findFirst({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      );
    }

    const session = await stripeCheckout.createOneTimePaymentSession({
      amount: Math.round(amount * 100),
      successUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancelUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
    });

    const donation = await prisma.donation.create({
      data: {
        amount,
        userId,
      },
    });

    await prisma.payment.create({
      data: {
        amount,
        userId,
        donationId: donation.id,
        paymentStatus: 'pending',
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Donation session created successfully',
        data: { sessionId: session.id, sessionUrl: session.url },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating donation session:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error', data: error },
      { status: 500 }
    );
  }
}