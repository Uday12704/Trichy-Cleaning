import { ShippingFormInputs } from "@repo/types";
import RazorpayButton from "./RazorpayButton";

interface RazorpayPaymentProps {
    amount: number;
    cartItems: any[];
}

export default function PaymentForm({ shippingForm, amount, cartItems }: RazorpayPaymentProps & { shippingForm: ShippingFormInputs }) {
    return (
        <div className="">
            <h1 className="text-xl font-semibold mb-4">Payment Summary</h1>
            <h2 className="text-md font-semibold mb-2 ">Shipping Details</h2>
            <div className="ml-4 flex flex-col gap-2">
                <p className="text-sm text-gray-500">{shippingForm.name}</p>
                <p className="text-sm text-gray-500">{shippingForm.address}</p>
                <p className="text-sm text-gray-500">{shippingForm.city} - {shippingForm.zip} {shippingForm.state}</p>
                <p className="text-sm text-gray-500">{shippingForm.phone}</p>
            </div>
            <div className="mt-6">
                <RazorpayButton shippingForm={shippingForm} amount={amount} cartItems={cartItems} />
            </div>
        </div>
    )
}