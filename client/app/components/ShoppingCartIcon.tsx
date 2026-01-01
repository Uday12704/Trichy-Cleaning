"use client"

import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import useCartStore from "../stores/cartStore"

export default function ShoppingCartIcon() {
    const {cart, hasHydrated} = useCartStore();

    if (!hasHydrated) return null;
    return (
        <Link href="/cart" className="relative">
            <ShoppingCart className="w-5 h-5 text-tcspink cursor-pointer" />
            <span className="absolute -top-3 -right-3 bg-tcspink text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-medium">{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>
        </Link>
    )
}