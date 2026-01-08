import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const popularProducts = [
    {
        id: 1,
        name: "3 Bucket Trolley",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, architecto quod eligendi suscipit dolores ipsam",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, architecto quod eligendi suscipit dolores ipsam ad similique laboriosam quia modi possimus repudiandae incidunt explicabo facilis, nisi dolorem culpa sint!" ,
        price: 1500,
        images: "https://res.cloudinary.com/deb4k16gn/image/upload/e_upscale/3Bkt_Trolley_e6wt2m.jpg",
    },
    {
        id: 2,
        name: "24 inch Dry Mop",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, architecto quod eligendi suscipit dolores ipsam",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, architecto quod eligendi suscipit dolores ipsam ad similique laboriosam quia modi possimus repudiandae incidunt explicabo facilis, nisi dolorem culpa sint!" ,
        price: 400,
        images: "https://res.cloudinary.com/deb4k16gn/image/upload/e_upscale/v1766494598/24_inch_Dry_Mop_xrubjw.jpg",
    },
    {
        id: 3,
        name: "Aer packet gel",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, architecto quod eligendi suscipit dolores ipsam",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, architecto quod eligendi suscipit dolores ipsam ad similique laboriosam quia modi possimus repudiandae incidunt explicabo facilis, nisi dolorem culpa sint!" ,
        price: 56,
        images: "https://res.cloudinary.com/deb4k16gn/image/upload/e_upscale/v1766494599/AER_lxv6sb.jpg",
    },
    {
        id: 4,
        name: "Aluminium Sticks",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, architecto quod eligendi suscipit dolores ipsam",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, architecto quod eligendi suscipit dolores ipsam ad similique laboriosam quia modi possimus repudiandae incidunt explicabo facilis, nisi dolorem culpa sint!" ,
        price: 100,
        images: "https://res.cloudinary.com/deb4k16gn/image/upload/e_upscale/v1766494599/AL_Sticks_jzzj7v.jpg",
    },
    {
        id: 5,
        name: "Applicator",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, architecto quod eligendi suscipit dolores ipsam",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, architecto quod eligendi suscipit dolores ipsam ad similique laboriosam quia modi possimus repudiandae incidunt explicabo facilis, nisi dolorem culpa sint!" ,
        price: 100,
        images: "https://res.cloudinary.com/deb4k16gn/image/upload/e_upscale/v1766494600/Applicator_zkfpba.jpg",
    },
]

const latestTransaction = [
    {
        id: 1,
        title: "Item Purchased",
        badge: "Uday",
        image: "https://avatars.githubusercontent.com/u/124599?v=4",
        count: 1400,
    },
    {
        id: 2,
        title: "Order Payment",
        badge: "Vrajesh",
        image: "https://avatars.githubusercontent.com/u/124599?v=4",
        count: 1400,
    },
    {
        id: 3,
        title: "Item Purchased",
        badge: "Ramesh",
        image: "https://avatars.githubusercontent.com/u/124599?v=4",
        count: 1400,
    }
]

export default function({title} : {title: string}) {

    return (
        <div className="">
            <h1 className="text-lg font-semibold mb-6">{title}</h1>
            <div className="flex flex-col gap-2">
                {title === "Popular Products" ? popularProducts.map((item) => (
                    <Card key={item.id} className="flex-row gap-4 p-4 items-center justify-between">
                        <div className="w-12 h-12 rounded-sm relative overflow-hidden">
                            <Image src={item.images || ""} alt={item.name} fill className="object-cover"/> 
                        </div>
                        <CardContent className="p-0 flex-1">
                            <CardTitle className="text-sm font-medium">{item.name}</CardTitle>
                        </CardContent>
                        <CardFooter className="p-0">
                            ₹{item.price}
                        </CardFooter>
                    </Card>
                )): latestTransaction.map((item) => (
                    <Card key={item.id} className="flex-row gap-4 p-4 items-center justify-between">
                        <div className="w-12 h-12 rounded-sm relative overflow-hidden">
                            <Image src={item.image} alt={item.title} fill className="object-cover"/> 
                        </div>
                        <CardContent className="p-0 flex-1">
                            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                            <Badge variant="secondary">{item.badge}</Badge>
                        </CardContent>
                        <CardFooter className="p-0">
                            {item.count / 1000}K
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}