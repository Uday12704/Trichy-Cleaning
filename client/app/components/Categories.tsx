"use client"
import {ShoppingBasket, BrushCleaning, SoapDispenserDroplet, RectangleEllipsis, Trash} from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const categories = [
    {
        name: "All",
        icon: <ShoppingBasket className='w-5 h-5' />,
        slug: "all"
    },
    {
        name: "Tools",
        icon: <BrushCleaning className='w-5 h-5' />,
        slug: "tools"
    },
    {
        name: "Cleaning Liquids",
        icon: <SoapDispenserDroplet className='w-5 h-5' />,
        slug: "cleaning-liquids"
    },
    {
        name: "Mats",
        icon: <RectangleEllipsis className='w-5 h-5' />,
        slug: "mats"
    },
    {
        name: "Plasticwares",
        icon: <Trash className='w-5 h-5' />,
        slug: "plasticwares"
    },
]

export default function Categories() {

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathName = usePathname();

    const selectedCatrgory = searchParams.get("category");

    const handleChange = (value: string | null) => {
        const params = new URLSearchParams(searchParams);
        params.set("category", value || "all");
        router.push(`${pathName}?${params.toString()}`, { scroll: false });
    }


    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 text-md gap-2 bg-gray-100 p-2 rounded-lg mb-4 mt-4">
            {categories.map((category) => (
                <div className={`flex items-center justify-center rounded-md px-2 py-1 gap-2 cursor-pointer ${category.slug === selectedCatrgory ? "bg-white" : "bg-gray-200"}`} key={category.name} onClick={() => handleChange(category.slug)}>
                    <span className='text-tcspink'>{category.icon}</span>
                    <span className=''>{category.name}</span>
                </div>
            ))}
        </div>
    )
}