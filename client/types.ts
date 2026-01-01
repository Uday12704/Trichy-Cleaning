import {z} from "zod";

export type ProductType = {
    id: string | number;
    name: string;
    shortDescription: string;
    description: string;
    price: number;
    images: string;
}

export type ProductsType = ProductType[]

export type CartItemType = ProductType & {
    quantity: number
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

export const PaymentFormSchema = z.object({
    cardHolder: z.string().min(2, "Card holder is required!"),
    cardNumber: z.string().min(16, "Card number is required!").max(16, "Card number is required!"),
    expirationDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiration date must be in MM/YY format!"),
    cvv: z.string().min(3, "cvv is required!").max(3, "cvv is required!"),
})

export type PaymentFormInputs = z.infer <typeof PaymentFormSchema>;

export type CartStoreStateType = {
    cart: CartItemsType,
    hasHydrated: boolean,
}

export type CartStoreActionsType = {
    addToCart: (product: CartItemType) => void,
    removeFromCart: (product: CartItemType) => void,
    clearCart: () => void
}