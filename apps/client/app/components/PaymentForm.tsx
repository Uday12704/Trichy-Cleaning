import { PaymentFormInputs, PaymentFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PaymentForm() {
    const {register, handleSubmit, formState: {errors},} = useForm<PaymentFormInputs> ({
        resolver: zodResolver(PaymentFormSchema),
    })

    const router = useRouter();
    const handlePaymentForm:SubmitHandler<PaymentFormInputs> = (data) => {
        
    }

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(handlePaymentForm)}>
            <div className="flex flex-col gap-2">
                <label htmlFor="cardHolder" className="text-sm text-gray-800 font-medium">Name on card</label>
                <input type="text" id="cardHolder" placeholder="John Doe" className="outline-none text-sm p-1 border-1 border-gray-200 rounded-md" {...register("cardHolder")}/>
                {errors.cardHolder && (
                    <p className="text-xs text-red-500">{errors.cardHolder.message}</p>
                )}
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="cardNumber" className="text-sm text-gray-800 font-medium">Card number</label>
                <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" className="outline-none text-sm p-1 border-1 border-gray-200 rounded-md" {...register("cardNumber")}/>
                {errors.cardNumber && (
                    <p className="text-xs text-red-500">{errors.cardNumber.message}</p>
                )}
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="expirationDate" className="text-sm text-gray-800 font-medium">Expiration date</label>
                <input type="text"
                 id="expirationDate"
                 placeholder="MM/YY"
                 className="outline-none text-sm p-1 border-1 border-gray-200 rounded-md"
                 {...register("expirationDate")}/>
                    {errors.expirationDate && (
                        <p className="text-xs text-red-500">{errors.expirationDate.message}</p>
                    )}
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="cvv" className="text-sm text-gray-800 font-medium">CVV</label>
                <input type="text"
                 id="cvv"
                 placeholder="123"
                 className="outline-none text-sm p-1 border-1 border-gray-200 rounded-md"
                 {...register("cvv")}/>
                    {errors.cvv && (
                        <p className="text-xs text-red-500">{errors.cvv.message}</p>
                    )}
            </div>
            
            <button type="submit"
                className="w-full bg-gray-800 text-white rounded-md p-2 flex justify-center items-center gap-1 cursor-pointer hover:bg-gray-900 transition-all duration-300">
                checkout <ShoppingCart className="w-4 h-4" />
            </button>
        </form>
    )
}