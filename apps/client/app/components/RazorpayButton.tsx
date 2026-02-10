"use client"

import { useAuth } from "@clerk/nextjs";
import { ShippingFormInputs } from "@repo/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface RazorpayPaymentProps {
    amount: number;
    cartItems: any[];
}

export default function RazorpayButton({ shippingForm, amount, cartItems }: RazorpayPaymentProps & { shippingForm: ShippingFormInputs }) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { userId, getToken } = useAuth();

    const handlePayment = async () => {
        setLoading(true);

        try {
            const token = await getToken();
            const res = await fetch (`${process.env.NEXT_PUBLIC_ORDER_SERVICE_URL}/api/orders`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    userId: userId,
                    items: cartItems,
                    userEmail: shippingForm.email,
                    shippingInfo: {
                        name: shippingForm.name,
                        email: shippingForm.email,
                        phone: shippingForm.phone,
                        address: shippingForm.address,
                        city: shippingForm.city,
                        state: shippingForm.state,
                        zip: shippingForm.zip
                    }
                }),
            })

            if(!res.ok) {
                throw new Error("Order creation failed");
            }

            const orderData = await res.json();

            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: orderData.amount * 100,
                currency: "INR",
                name: "Trichy Cleaning Solutions",
                description: "Checkout payment",
                order_id: orderData.razorpayOrderId,
                handler: async function (response: any) {
                    const verifyRes = await fetch(`${process.env.NEXT_PUBLIC_ORDER_SERVICE_URL}/api/orders/verify`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`
                        },
                        body: JSON.stringify({
                            razorpayOrderId: orderData.razorpayOrderId,
                            razorpayPaymentId: response.razorpay_payment_id,
                            razorpaySignature: response.razorpay_signature,
                        }),
                    });

                    if(verifyRes.ok) {
                        router.push(`/orders?orderId=${orderData.orderId}`);
                    } else {
                        console.log("Signature: ", response.razorpay_signature);
                        alert("Payment verification failed");
                    }
                },
                prefill: {
                    email: shippingForm.email,
                    name: shippingForm.name,
                    contact: shippingForm.phone,
                    address: {
                        line1: shippingForm.address,
                        city: shippingForm.city,
                        state: shippingForm.state,
                    }
                }
            }

            const rzp1 = new window.Razorpay(options);
            rzp1.on("payment.failed", (response: any) => {
                alert("Payment failed" + response.error.reason);
            })
            rzp1.open();
        } catch (error) {
            console.error(error);
            alert("Something went wrong initializing payment");
        }
        finally {
            setLoading(false);
        }
    };

    return (
    <button
        onClick={handlePayment}
        disabled={loading}
        className="w-full bg-gray-800 text-white rounded-md p-2 flex justify-center items-center gap-1 cursor-pointer hover:bg-gray-900 transition-all duration-300">
        {loading ? "Processing..." : `Pay ₹${amount}`}
    </button>
     );
}