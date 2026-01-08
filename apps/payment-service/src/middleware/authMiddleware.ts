import { getAuth } from "@hono/clerk-auth";
import { createMiddleware } from "hono/factory";

export const shouldBeUser = createMiddleware<{
    Variables: {
        userId: string;
    };
}>(async (c, next) => {
    const auth = getAuth(c)
    const userId = auth?.userId

    if (!userId) {
        return c.json({
            message: 'You are not logged in.',
        })
    }

    c.set("userId", auth.userId)
    await next();
})