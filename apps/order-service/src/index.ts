import Fastify from 'fastify'
import cors from "@fastify/cors";
import { clerkPlugin } from '@clerk/fastify'
import { shouldBeUser } from './middleware/authMiddleware.js'
import { connectOrderDB } from '@repo/order-db'
import { OrderRoute } from './routes/order.js'

const fastify = Fastify()
fastify.register(clerkPlugin)

fastify.register(cors, {
  origin: ["http://localhost:3002", "http://localhost:3000"],
});

fastify.get("/health", (request, reply) => {
  return reply.status(200).send({
    status: "ok",
    uptime: process.uptime(),
    timeStamp: Date.now(),
  })
})

fastify.get("/test", {preHandler: shouldBeUser}, (request, reply) => {
  return reply.send({meassage: "Order service authenticated!", 
    userId: request.userId,
  })
})

fastify.register(OrderRoute, { prefix: "/api/orders" })

const start = async () => {
  try {
    await connectOrderDB();
    await fastify.listen({ port: 8001 })
    console.log("Order service is running on port 8001")
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

start()