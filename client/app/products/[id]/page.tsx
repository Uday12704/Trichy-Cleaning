import ProductInteraction from "@/app/components/ProductInteraction";
import { ProductType } from "@/types"
import { products } from "@/app/components/ProductList";
import Image from "next/image"

export const generateMetadata = async({params}: {params:Promise<{id:string}>}) => {

    const {id} = await params;
    const product = products.find((p) => p.id === Number(id));
    if (!product) {
        return { title: "Product Not Found" };
    }
    return {
        title: product.name,
        describe: product.description,
    }
}

export default async function ProductPage ({params}:{params:Promise<{id:string}>}) {
    const {id} = await params;
    const product = products.find((p) => p.id === Number(id));
    if (!product) {
        return { title: "Product Not Found" };
    }

    return (
        <div className="flex flex-col gap-4 lg:flex-row md:gap-16 mt-10">
            {/* IMAGE */}
            <div className="w-full lg:w-5/12 xl:w-4/12 relative aspect-[2/3] shadow-lg">
                <Image src={product.images} alt={product.name} fill sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 42vw, 33vw" className="object-contain rounded-md" />
            </div>
            {/* DETAILS */}
            <div className="w-full lg:w-7/12 flex flex-col gap-4">
                <h1 className="text-2xl lg:text-3xl font-semibold">{product.name}</h1>
                <p className="text-gray-500 text-sm">{product.shortDescription}</p>
                <p className="text-gray-500">{product.description}</p>
                <h2 className="text-2xl font-semibold">₹{product.price.toFixed(2)}</h2>

                <ProductInteraction product={product} />

                <p className="text-xs text-gray-500">By clicking Pay Now, you agree to our{" "} <span className="text-underline hover:text-black">Terms & Conditions</span>{" "} and <span className="text-underline hover:text-black">Privacy Policy</span>. You authorize us to charge your selected payment method for the total amount shown. All sales are subjected to our return and <span className="text-underline hover:text-black">Refund Policies</span></p>
            </div>
        </div>
    )
}