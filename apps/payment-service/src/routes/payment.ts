import { Hono } from 'hono';
import { razorpay, verifyRazorpaySignature } from '../utils/razorpay';

const paymentRoutes = new Hono();

paymentRoutes.post('/create-order', async (c) => {
  try {
    const body = await c.req.json()
    const { amount, orderId } = body

    if (!amount || !orderId) {
      return c.json({ error: 'Amount and Order ID are required' }, 400)
    }

    const options = {
      amount: Math.round(amount * 100), 
      currency: 'INR',
      receipt: `order_${orderId}`, 
      notes: {
        internalOrderId: orderId
      }
    }

    const order = await razorpay.orders.create(options)
    
    return c.json(order)
  } catch (error) {
    console.error('Error creating Razorpay order:', error)
    return c.json({ error: 'Failed to create payment order' }, 500)
  }
})

paymentRoutes.post("/verify", async (c) => {

  try {
    const body = await c.req.json();
    const { razorpayOrderId, razorpayPaymentId, razorpaySignature } = body;

    console.log("Payment Service received:", { razorpayOrderId, razorpayPaymentId });
    const isValid = verifyRazorpaySignature(razorpayOrderId, razorpayPaymentId, razorpaySignature);

    if(isValid) {
      return c.json({ success: true, message: "Payment verified successfully!" });
    }
    else {
      return c.json({ success: false, message: "Invalid Signature!" }, 400);
    }
  }
   catch (error) {
    console.log(error);
    return c.json({ success: false, message: "Error verifying payment Signature!" }, 500);
  }
})

export default paymentRoutes;