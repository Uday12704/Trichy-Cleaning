import type { Product } from "@repo/product-db";
import { z } from "zod";

export type CartItemType = Product & {
    quantity: number;
}

export type CartItemsType = CartItemType[]

export const ShippingFormSchema = z.object({
    name: z.string().min(2, "Name is required!"),
    email: z.email().min(2, "Email is required!"),
    phone: z.string().min(7, "phone No must be between 7 to 10 digits!").max(10, "phone No must be between 7 to 10 digits!").regex(/^\d+$/, "Phone No conatins only numbers!"),
    address: z.string().min(1, "Address is required!"),
    city: z.string().min(1, "City is required!"),
    state: z.string().min(1, "State is required!"),
})

export type ShippingFormInputs = z.infer <typeof ShippingFormSchema>;

export type CartStoreStateType = {
    cart: CartItemsType,
    hasHydrated: boolean,
}

export type CartStoreActionsType = {
    addToCart: (product: CartItemType) => void,
    removeFromCart: (product: CartItemType) => void,
    clearCart: () => void
}