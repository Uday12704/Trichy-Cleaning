import {ProductsType} from "@repo/types";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Link from "next/link";
import Filter from "./Filter";

export const products: ProductsType = [
    {
        id: 1,
        name: "3 Bucket Trolley",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, architecto quod eligendi suscipit dolores ipsam",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, architecto quod eligendi suscipit dolores ipsam ad similique laboriosam quia modi possimus repudiandae incidunt explicabo facilis, nisi dolorem culpa sint!" ,
        price: 1500,
        images: "https://res.cloudinary.com/deb4k16gn/image/upload/e_upscale/3Bkt_Trolley_e6wt2m.jpg",
        categorySlug: "test",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 2,
        name: "24 inch Dry Mop",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, architecto quod eligendi suscipit dolores ipsam",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, architecto quod eligendi suscipit dolores ipsam ad similique laboriosam quia modi possimus repudiandae incidunt explicabo facilis, nisi dolorem culpa sint!" ,
        price: 400,
        images: "https://res.cloudinary.com/deb4k16gn/image/upload/e_upscale/v1766494598/24_inch_Dry_Mop_xrubjw.jpg",
        categorySlug: "test",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 3,
        name: "Aer packet gel",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, architecto quod eligendi suscipit dolores ipsam",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, architecto quod eligendi suscipit dolores ipsam ad similique laboriosam quia modi possimus repudiandae incidunt explicabo facilis, nisi dolorem culpa sint!" ,
        price: 56,
        images: "https://res.cloudinary.com/deb4k16gn/image/upload/e_upscale/v1766494599/AER_lxv6sb.jpg",
        categorySlug: "test",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 4,
        name: "Aluminium Sticks",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, architecto quod eligendi suscipit dolores ipsam",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, architecto quod eligendi suscipit dolores ipsam ad similique laboriosam quia modi possimus repudiandae incidunt explicabo facilis, nisi dolorem culpa sint!" ,
        price: 100,
        images: "https://res.cloudinary.com/deb4k16gn/image/upload/e_upscale/v1766494599/AL_Sticks_jzzj7v.jpg",
        categorySlug: "test",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 5,
        name: "Applicator",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, architecto quod eligendi suscipit dolores ipsam",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, architecto quod eligendi suscipit dolores ipsam ad similique laboriosam quia modi possimus repudiandae incidunt explicabo facilis, nisi dolorem culpa sint!" ,
        price: 100,
        images: "https://res.cloudinary.com/deb4k16gn/image/upload/e_upscale/v1766494600/Applicator_zkfpba.jpg",
        categorySlug: "test",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 6,
        name: "Bio Septic",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, architecto quod eligendi suscipit dolores ipsam",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, architecto quod eligendi suscipit dolores ipsam ad similique laboriosam quia modi possimus repudiandae incidunt explicabo facilis, nisi dolorem culpa sint!" ,
        price: 100,
        images: "https://res.cloudinary.com/deb4k16gn/image/upload/e_upscale/v1766494599/Bio_Septic_nvjzay.jpg",
        categorySlug: "test",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 7,
        name: "C-103 Trolley",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, architecto quod eligendi suscipit dolores ipsam",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, architecto quod eligendi suscipit dolores ipsam ad similique laboriosam quia modi possimus repudiandae incidunt explicabo facilis, nisi dolorem culpa sint!" ,
        price: 100,
        images: "https://res.cloudinary.com/deb4k16gn/image/upload/e_upscale/v1766494599/C-103_trolley_zov1h1.jpg",
        categorySlug: "test",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 8,
        name: "Caddy Bucket",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, architecto quod eligendi suscipit dolores ipsam",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, architecto quod eligendi suscipit dolores ipsam ad similique laboriosam quia modi possimus repudiandae incidunt explicabo facilis, nisi dolorem culpa sint!" ,
        price: 100,
        images: "https://res.cloudinary.com/deb4k16gn/image/upload/e_upscale/v1766494600/Caddy_rb6ruk.jpg",
        categorySlug: "test",
        createdAt: new Date(),
        updatedAt: new Date(),
    }
];

export default function ProductList({category, params} : {category:string, params:"home" | "products"}) {
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