import mongoose, { Schema, Document } from "mongoose";

export interface IOrder extends Document {
  userId: string;
  email: string;
  items: { productId: string; quantity: number; price: number }[];
  totalAmount: number;
  status: 'PENDING' | 'PAID' | 'FAILED';
  shippingInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
  }[];
  razorpayOrderId?: string;
  razorpayPaymentId?: string;
  razorpaySignature?: string;
}

const orderSchema = new Schema({
    userId: { type: String, required: true },
    email: { type: String, required: true },
    totalAmount: { type: Number, required: true },
    items: [
        {
          productId: String,
          quantity: Number,
          price: Number
        }
    ],
    status: { type: String, enum: ['PENDING', 'PAID', 'FAILED'], default: 'PENDING' },
    shippingInfo: [
      {
        name: String,
        email: String,
        phone: String,
        address: String,
        city: String,
        state: String,
        zip: String
      }
    ],
    razorpayOrderId: String,
    razorpayPaymentId: { type: String },
    razorpaySignature: { type: String }
}, { timestamps: true});

if (mongoose.models.Order) {
  delete mongoose.models.Order;
}

export const Order = mongoose.model<IOrder>("Order", orderSchema);