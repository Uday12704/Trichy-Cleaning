import { auth } from "@clerk/nextjs/server"
import { OrderType } from "@repo/types";


const fetchOrders = async () => {
    const { getToken } = await auth()
    const token = await getToken();
    const res = await fetch(`${process.env.NEXT_PUBLIC_ORDER_SERVICE_URL}/api/orders/user-orders`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    );

    const data: OrderType[] = await res.json();
    return data;
}

export default async function OrdersPage() {
    const orders = await fetchOrders();

    if(!orders){
        return <div className="">No Orders Found</div>
    }

    return (
        <div className="">
            <h1 className="text-2xl my-4 font-medium">Orders Page</h1>
            <ul>
                {orders.map((order) => (
                    <li key={order._id} className="flex items-center">
                        <div className="w-1/4">
                            <span className="font-medium text-sm text-gray-500">Order ID</span>
                            <p className="mb-3">{order._id}</p>
                        </div>
                        <div className="w-1/12">
                            <span className="font-medium text-sm text-gray-500">Total</span>
                            <p className="mb-3">{order.totalAmount}</p>
                        </div>
                        <div className="w-1/12">
                            <span className="font-medium text-sm text-gray-500">Status</span>
                            <p className="mb-3">{order.status}</p>
                        </div>
                        <div className="w-1/8">
                            <span className="font-medium text-sm text-gray-500">Date</span>
                            <p className="mb-3">{order.createdAt ? new Date(order.createdAt).toLocaleDateString("en-IN"): "-"}</p>
                        </div>
                        <div className="">
                            <span className="font-medium text-sm text-gray-500">Products</span>
                            <p className="mb-3">{order.products?.map((product) => product.name).join(", ") || "-"}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}