import {ProductType} from "@repo/types";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Link from "next/link";
import Filter from "./Filter";

const fetchData = async ({
    category,sort,search,params
} : {category?:string, sort?:string, search?:string, params:"home" | "products"}) => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_PRODUCT_SERVICE_URL}/products?${category ? `category=${category}` : ""}${search ? `&search=${search}` : ""}&sort=${sort || "newest"}${params === "home" ? "@limit=8" : ""}`
    );

    const data:ProductType[] = await res.json();
    return data;
};

export default async function ProductList({category, sort, search, params} : {category:string, sort?:string, search?:string, params:"home" | "products"}) {
    const products = await fetchData({category, sort, search, params});
    
    return (
        <div className="w-full">
            {params === "home" ? (<h1 className="text-5xl font-bold justify-center flex mt-14"><span className="text-tcspink">T</span>op seller</h1>) : (<h1 className="text-5xl font-bold justify-center flex mt-7"><span className="text-tcspink">P</span>roducts</h1>)}
            <Categories />
            {params === "products" && <Filter />}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
            {params === "home" && (
                <Link href={category ? `products/?category=${category}` : "/products"} 
                className="text-sm text-gray-500 flex justify-center hover:underline mt-2">view all products</Link>
            )}
        </div>
    )
}