"use client"
import {ProductType} from "@repo/types"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import useCartStore from "../stores/cartStore"
import { toast } from 'react-toastify';

export default function ProductCard({product}: {product:ProductType}) {
    const {addToCart, cart} = useCartStore();

    const handleAddToCart = () => {
        addToCart({
            ...product,
            quantity: 1,
        })
        toast.success("Added to cart!")
    }
    return (
        <div className="hover:ring-1 hover:ring-tcspink shadow-lg rounded-md overflow-hidden p-2 m-2 transition-all">
            <Link href={`/products/${product.id}`}>
                <div className="relative aspect-[2/2]">
                    <Image src={product.images} alt={product.name} fill sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 42vw, 33vw" className="object-cover hover:scale-105 transition-all duration-300" />
                </div>
            </Link>

            {/*PRODUCT DETAILS*/}

            <div className="flex flex-col gap-4 p-4">
                <h1 className="font-bold text-lg">{product.name}</h1>
                <p className="text-xs text-gray-500">{product.shortDescription}</p>
                {/*PRICE DETAILS*/}
                <div className="flex items-center justify-between">
                    <p className="font-bold">₹{product.price}</p>
                    <button onClick={handleAddToCart} className="shadow-lg ring-1 ring-tcspink rounded-md px-2 py-1 cursor-pointer flex items-center gap-2 hover:text-white hover:bg-tcspink transition-all duration-300 font-bold"><ShoppingCart className="w-4 h-4" /> Add to cart</button>
                </div>
            </div>
        </div>
    )
}