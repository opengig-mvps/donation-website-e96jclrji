import Stripe from 'stripe';
import { StripeCheckout } from './checkout';
import { StripePaymentIntent } from './intent';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const stripeCheckout = new StripeCheckout(stripe);

export const stripePaymentIntent = new StripePaymentIntent(stripe);
