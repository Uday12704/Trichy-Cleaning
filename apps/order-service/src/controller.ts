import { Order } from "./models/Order";
import { calculateTotalPrice } from "./utils/pricing";
import { FastifyRequest, FastifyReply } from "fastify";

export interface CreateOrderBody {
  items: { productId: string; quantity: number }[];
  userId: string;
  userEmail: string;
  shippingInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
  }
}

export const createOrder = async (request: FastifyRequest<{ Body: CreateOrderBody }>, 
  reply: FastifyReply) => {
    
    const { items, userId, userEmail, shippingInfo } = request.body;

    if (!items || items.length === 0) {
        return reply.status(400).send({ message: "Cart is empty" });
    }

    try {
        const totalAmount = await calculateTotalPrice(items);
        
        const newOrder = await Order.create({
            userId,
            email: userEmail || shippingInfo.email,
            items,
            totalAmount,
            shippingInfo: {
                name: shippingInfo.name,
                email: shippingInfo.email,
                phone: shippingInfo.phone,
                address: shippingInfo.address,
                city: shippingInfo.city,
                state: shippingInfo.state,
                zip: shippingInfo.zip
            },
            status: 'PENDING'
        }as any);

        const paymentResponse = await fetch("http://localhost:8002/create-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                amount: totalAmount,
                orderId: newOrder._id.toString(),
            })  
        });

        if(!paymentResponse.ok) {
            throw new Error("Failed to connect to payment service");
        }

        const razorpayData = await paymentResponse.json();
        console.log("DEBUG: Razorpay Data from Payment Service:", razorpayData);

        const savedOrder = await Order.findByIdAndUpdate(
            newOrder._id,
            { razorpayOrderId: razorpayData.id },
            { new: true }
        );

console.log("DEBUG: Order Saved in DB with Razorpay ID:", savedOrder?.razorpayOrderId);

        return reply.status(201).send({
            orderId: newOrder._id,
            razorpayOrderId: razorpayData.id,
            amount: totalAmount,
            currency: "INR",
            key: process.env.RAZORPAY_KEY_ID,
        })

    } catch (error) {
        console.log(error);
        return reply.status(500).send({ message: "Error creating order"});
    }
}

export const verifyPayment = async (request: FastifyRequest, reply: FastifyReply) => {
    const { razorpayOrderId, razorpayPaymentId, razorpaySignature } = request.body as any;

    console.log(`[OrderService] Received Data:`, { razorpayOrderId, razorpayPaymentId });
    if (!razorpayOrderId || !razorpaySignature) {
      return reply.status(400).send({ message: "Missing required payment details" });
    }

    try {
        
        const verifyRes = await fetch("http://localhost:8002/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ razorpayOrderId, razorpayPaymentId, razorpaySignature })
        });

        const data = await verifyRes.json();

        if (data.success) {
        const updatedOrder = await Order.findOneAndUpdate(
            { razorpayOrderId: razorpayOrderId },
            { 
                status: 'PAID',
                razorpayPaymentId: razorpayPaymentId,
                razorpaySignature: razorpaySignature
            },
            { new: true }
        );
        if (!updatedOrder) {
            console.error("❌ CRITICAL ERROR: Database update returned NULL. Order not found!");
        } else {
            console.log("✅ Database Updated! New Status:", updatedOrder.status);
        }

        return reply.send({ success: true, message: "Payment Successful" });
        }
        else {
            console.error(`[Verify] Signature Invalid`);
            return reply.status(400).send({ success: false, message: "Invalid Signature" });
        }
    } catch (error) {
        console.log(error);
        return reply.status(500).send({ message: "Verification Failed" })
    }
}