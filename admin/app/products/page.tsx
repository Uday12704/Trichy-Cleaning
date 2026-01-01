import { columns, Product } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<Product[]> => {
    return [
        {
            id: 1,
            name: "3 Bucket Trolley",
            shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, architecto quod eligendi suscipit dolores ipsam ad similique laboriosam quia modi possimus repudiandae incidunt explicabo facilis, nisi dolorem culpa sint!" ,
            price: 1500,
            images: "https://res.cloudinary.com/deb4k16gn/image/upload/e_upscale/3Bkt_Trolley_e6wt2m.jpg",
        },
        {
            id: 2,
            name: "24 inch Dry Mop",
            shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, architecto quod eligendi suscipit dolores ipsam ad similique laboriosam quia modi possimus repudiandae incidunt explicabo facilis, nisi dolorem culpa sint!" ,
            price: 400,
            images: "https://res.cloudinary.com/deb4k16gn/image/upload/e_upscale/v1766494598/24_inch_Dry_Mop_xrubjw.jpg",
        },
        {
            id: 3,
            name: "Aer packet gel",
            shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, architecto quod eligendi suscipit dolores ipsam ad similique laboriosam quia modi possimus repudiandae incidunt explicabo facilis, nisi dolorem culpa sint!" ,
            price: 56,
            images: "https://res.cloudinary.com/deb4k16gn/image/upload/e_upscale/v1766494599/AER_lxv6sb.jpg",
        },
        {
            id: 4,
            name: "Aluminium Sticks",
            shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, architecto quod eligendi suscipit dolores ipsam ad similique laboriosam quia modi possimus repudiandae incidunt explicabo facilis, nisi dolorem culpa sint!" ,
            price: 100,
            images: "https://res.cloudinary.com/deb4k16gn/image/upload/e_upscale/v1766494599/AL_Sticks_jzzj7v.jpg",
        },
        {
            id: 5,
            name: "Applicator",
            shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, architecto quod eligendi suscipit dolores ipsam ad similique laboriosam quia modi possimus repudiandae incidunt explicabo facilis, nisi dolorem culpa sint!" ,
            price: 100,
            images: "https://res.cloudinary.com/deb4k16gn/image/upload/e_upscale/v1766494600/Applicator_zkfpba.jpg",
        },
        {
            id: 6,
            name: "Bio Septic",
            shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, architecto quod eligendi suscipit dolores ipsam ad similique laboriosam quia modi possimus repudiandae incidunt explicabo facilis, nisi dolorem culpa sint!" ,
            price: 100,
            images: "https://res.cloudinary.com/deb4k16gn/image/upload/e_upscale/v1766494599/Bio_Septic_nvjzay.jpg",
        },
        {
            id: 7,
            name: "C-103 Trolley",
            shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, architecto quod eligendi suscipit dolores ipsam ad similique laboriosam quia modi possimus repudiandae incidunt explicabo facilis, nisi dolorem culpa sint!" ,
            price: 100,
            images: "https://res.cloudinary.com/deb4k16gn/image/upload/e_upscale/v1766494599/C-103_trolley_zov1h1.jpg",
        },
        {
            id: 8,
            name: "Caddy Bucket",
            shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, architecto quod eligendi suscipit dolores ipsam ad similique laboriosam quia modi possimus repudiandae incidunt explicabo facilis, nisi dolorem culpa sint!" ,
            price: 100,
            images: "https://res.cloudinary.com/deb4k16gn/image/upload/e_upscale/v1766494600/Caddy_rb6ruk.jpg",
        },
    ]
}

export default async function UsersPage() {
    const data = await getData();
    return (
        <div className="">
            <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
                <h1 className="font-semibold">All Users</h1>
            </div>
            <DataTable columns={columns} data={data}/>
        </div>
    )
}