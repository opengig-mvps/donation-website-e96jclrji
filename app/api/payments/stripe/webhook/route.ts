import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import prisma from '@/lib/prisma';
import { sendEmail } from '@/lib/email-service';

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature');

  let event;

  try {
    if (!sig) {
      throw new Error('Missing Stripe signature');
    }
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET as string,
    );
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: `Webhook Error: ${err.message}` },
      { status: 400 },
    );
  }

  switch (event.type) {
    case 'payment_intent.succeeded':
      const intent = event.data.object;
      const paymentId = intent.id;
      const amount = intent.amount_received / 100;

      try {
        await prisma.payment.updateMany({
          where: { id: paymentId },
          data: { paymentStatus: 'succeeded' },
        });

        const donation = await prisma.donation.findFirst({
          where: { paymentId },
          include: { user: true },
        });

        if (donation) {
          await sendEmail({
            to: donation.user.email,
            template: {
              subject: 'Donation Confirmation',
              html: `<h1>Thank you for your donation!</h1><p>Your donation of $${amount} has been successfully processed.</p>`,
              text: `Thank you for your donation! Your donation of $${amount} has been successfully processed.`,
            },
          });
        }
      } catch (error: any) {
        console.error('Error updating payment records:', error);
        return NextResponse.json(
          { success: false, message: 'Error processing payment', data: error },
          { status: 500 },
        );
      }
      break;
    default:
      return NextResponse.json(
        { success: false, message: 'Unhandled event type' },
        { status: 400 },
      );
  }

  return NextResponse.json({
    success: true,
    message: 'Webhook processed successfully',
    data: {},
  });
}