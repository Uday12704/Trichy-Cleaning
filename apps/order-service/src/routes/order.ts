import { FastifyInstance } from "fastify";
import { shouldBeAdmin, shouldBeUser } from "../middleware/authMiddleware";
import { Order } from "@repo/order-db"
import { createOrder, CreateOrderBody, verifyPayment } from "../controller";

export const OrderRoute = async (fastify:FastifyInstance) => {
    fastify.get("/user-order", { preHandler: shouldBeUser }, async (request, reply) => {
        const orders = await Order.find({userId: request.userId});
        return reply.send(orders);
    })
    fastify.get("/orders", { preHandler: shouldBeAdmin }, async (request, reply) => {
        const orders = await Order.find();
        return reply.send(orders);
    })

    fastify.post<{ Body: CreateOrderBody }>("/", { preHandler: shouldBeUser }, createOrder);
  
    fastify.post("/verify", { preHandler: shouldBeUser }, verifyPayment);
}