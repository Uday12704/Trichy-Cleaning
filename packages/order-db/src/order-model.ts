import mongoose, { InferSchemaType, model } from 'mongoose';
const { Schema } = mongoose;

export const OrderStatus = ["PENDING", "PAID", "FAILED"] as const

const OrderSchema = new Schema({
    userId: { type: String, required: true},
    email: { type: String, required: true},
    totalAmount: { type: Number, required: true},
    status: { type: String, required: true, enum: OrderStatus},
    products: { type: [
            {
                name: { type: String, required: true},
                quantity: { type: Number, required: true},
                price: { type: Number, required: true},
            }
        ], required: true,
    },
    shipping: { type: [
            {
                name: { type: String, required: true},
                phoneNo: { type: String, required: true},
                address: { type: String, required: true},
                city: { type: String, required: true},
                state: { type: String, required: true},
                zip: { type: String, required: true},
            }
        ], required: true,
    },
    },{timestamps: true}
);

export type OrderSchemaType = InferSchemaType<typeof OrderSchema>;

export const Order = model<OrderSchemaType>("Order", OrderSchema);