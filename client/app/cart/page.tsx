"use client"

import { ShippingFormInputs } from "@/types"
import { ArrowRight, Trash2 } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import ShippingForm from "../components/ShippingForm"
import PaymentForm from "../components/PaymentForm"
import { useState } from "react"
import Image from "next/image"
import useCartStore from "../stores/cartStore"
 
const steps = [
    {
        id:1,
        title: "Shopping Cart"
    },
    {
        id:2,
        title: "Shipping Address"
    },
    {
        id:3,
        title: "Payment Method"
    },
]

 export default function CartPage() {

    const searchParams = useSearchParams();
    const router = useRouter();
    const activeStep = parseInt(searchParams.get("step") || "1");

    const [shippingForm, setShippingForm] = useState<ShippingFormInputs>();

    const {cart, removeFromCart} = useCartStore();
    const shippingFee = () => cart.length > 0 ? 100 : 0;
    const subTotal = () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discount = () => cart.length < 1 ? 0 : subTotal() >= 100 ? subTotal() * 0.10 : 0;
    const total = () => subTotal() + shippingFee() - discount();

    return (
        <div className="flex flex-col items-center justify-center gap-8 mt-16">
            <h1 className="text-2xl font-semibold">Your Shopping Cart</h1>

            <div className="flex items-center flex-row gap-5 sm:gap-16">
                {steps.map((step) => (
                    <div key={step.id} className={`flex items-center gap-2 border-b-3 pb-4 ${step.id === activeStep ? "border-gray-800" : "border-gray-200"}`}>
                        <div className={`text-white flex items-center justify-center w-7 h-7 rounded-full font-semibold ${step.id === activeStep ? "bg-gray-800" : "bg-gray-400"}`}>{step.id}</div>
                        <p className={`text-xs sm:text-sm font-medium ${step.id === activeStep ? "text-gray-800" : "text-gray-400"}`}>{step.title}</p>
                    </div>
                ))}
            </div>

            <div className="w-[90%] flex flex-col lg:flex-row gap-16">
                <div className="w-full lg:w-7/12 shadow-lg rounded-lg border-1 border-gray-100 flex flex-col gap-8 p-8">
                    {activeStep === 1 ? (
                        cart.map((item) => (
                            <div className="flex items-center justify-between" key={item.id}>
                                {/* IMAGES AND DETAILS */}
                                <div className="flex gap-8 border-b-1 border-gray-200 p-1">
                                    <div className="relative w-32 h-27 bg-gray-50 rounded-lg overflow-hidden">
                                        <Image
                                         src={item.images}
                                         alt={item.name} fill sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 42vw, 33vw" className="object-contain" >
                                        </Image>
                                    </div>
                                    {/* ITEMS DETAILS */}
                                    <div className="flex flex-col justify-between">
                                        <div className="flex flex-col gap-1">
                                            <p className="text-sm font-medium">{item.name}</p>
                                            <p className="text-xs text-gray-500">Quantity: {item.quantity}</p>
                                        </div>
                                        <p className="text-sm">₹{item.price}</p>
                                    </div>
                                </div>
                                <button onClick={() => removeFromCart(item)} className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-400 cursor-pointer hover:bg-red-200 transition-all duration-300"><Trash2 className="w-4 h-4" /></button>
                            </div>
                        ))
                    ) : 
                     activeStep === 2 ? (<ShippingForm setShippingForm = {setShippingForm}/>) : 
                     activeStep === 3 && shippingForm ? (<PaymentForm />) : 
                     (<p className="text-sm text-gray-500">Please fill in the shipping form to continue.</p>)}
                </div>
                <div className="w-full lg:w-5/12 shadow-lg rounded-lg border-1 border-gray-100 flex flex-col gap-8 p-8 h-max">
                    <h1 className="font-semibold">Cart Details</h1>
                    <div className="flex flex-col gap-4">
                        <div className="text-sm flex justify-between">
                            <p className="text-gray-500">Subtotal</p>
                            <p className="font-medium">₹{subTotal().toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="text-sm flex justify-between">
                            <p className="text-gray-500">Discount</p>
                            <p className="font-medium text-red-500">{`(10%) -₹${discount().toFixed(2)}`}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="text-sm flex justify-between">
                            <p className="text-gray-500">Shipping Fee</p>
                            <p className="font-medium">+₹{shippingFee()}</p>
                        </div>
                    </div>
                    <hr className="text-gray-200"/>
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between">
                            <p className="text-gray-800">Total</p>
                            <p className="font-medium">₹{total().toFixed(2)}</p>
                        </div>
                    </div>

                    {activeStep === 1 && (
                        <button onClick={() => router.push("/cart?step=2", {scroll: false})} 
                                className="w-full bg-gray-800 text-white rounded-md p-2 flex justify-center items-center gap-1 cursor-pointer hover:bg-gray-900 transition-all duration-300">
                            continue <ArrowRight className="w-4 h-4" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
 }