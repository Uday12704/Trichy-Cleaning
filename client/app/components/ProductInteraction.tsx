"use client"

import { ProductType } from "@/types"
import { Minus, Plus, ShoppingCart } from "lucide-react"
import { useState } from "react"
import useCartStore from "../stores/cartStore"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"

export default function ProductInteraction({product}: {product: ProductType}) {

    const router = useRouter();
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCartStore();
    const handleQuantityChange = (type: "increment" | "decrement") => {
        if (type === "increment") {
            setQuantity(prev => prev + 1);
        }
        else {
            if (quantity > 1) {
                setQuantity(prev => prev - 1);
            }
        }
    }

    const handleAddToCart = () => {
        addToCart(
            {
                ...product, quantity,
            }
        )
        toast.success("Added to cart!");
    };

    const handleBuyNow = () => {
        handleAddToCart();
        router.push("/cart")
    }

    return (
        <div className="flex flex-col gap-4 mt-4">
            {/* QUANTITY */}
            <div className="flex flex-col gap-2 text-sm">
                <span className="text-gray-800 font-medium">Quantity</span>
                <div className="flex item-center gap-2">
                    <button onClick={() => handleQuantityChange("decrement")} className="border-1 border-gray-300 cursor-pointer p-1"><Minus className="w-4 h-4"/></button>
                    <span className="flex items-center">{quantity}</span>
                    <button onClick={() => handleQuantityChange("increment")} className="border-1 border-gray-300 cursor-pointer p-1"><Plus className="w-4 h-4"/></button>
                </div>
            </div>

            {/* BUTTONS */}

            <button onClick={handleAddToCart} className="bg-gray-800 text-white rounded-md shadow-lg flex items-center justify-center px-4 py-3 mt-4 cursor-pointer text-sm font-medium hover:bg-gray-900 transition-all duaration-300"><Plus className="w-4 h-4 mr-1"/> Add to Cart</button>
            <button onClick={handleBuyNow} className="ring-1 ring-tcspink text-gray-800 rounded-md shadow-lg flex items-center justify-center px-4 py-3 mt-2 cursor-pointer text-sm font-medium hover:bg-tcspink hover:text-white transition-all duaration-300"><ShoppingCart className="w-4 h-4 mr-1" />Buy this item</button>
        </div>
    )
}