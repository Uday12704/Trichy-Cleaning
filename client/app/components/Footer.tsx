import Link from "next/link"
import Image from "next/image"

export default function footer() {
    return (
        <div className="relative mt-16 bg-white text-gray-700 border-t border-gray-200 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-[url('/footer-bg.png')] bg-cover bg-center opacity-50"></div>
            
            <div className="relative flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0 p-8">
                <div className="flex flex-col gap-4 items-center sm:items-start">
                    <Link href="/">
                        <Image 
                            src="/logo.jpg"
                            alt="TCS logo"
                            width={100}
                            height={100}
                            className="w-30 h-12 md:w-40 md:h-15 hidden sm:block">
                        </Image>

                        <Image 
                            src="/logo-icon.svg"
                            alt="TCS logo"
                            width={36}
                            height={36}
                            className="w-10 h-10 md:w-25 md:h-25 block sm:hidden">
                        </Image>
                    </Link>
                    <p className="text-sm">&copy; {new Date().getFullYear()} Trichy Cleaning Solutions</p>
                    <p className="text-sm">All rights reserved.</p>
                </div>

                <div className="flex flex-col gap-4 text-sm items-center sm:items-start">
                    <p className="text-lg text-tcspink">Links</p>
                    <Link href="/" className="hover-border">Homepage</Link>
                    <Link href="/" className="hover-border">Contact</Link>
                    <Link href="/" className="hover-border">Products</Link>
                    <Link href="/" className="hover-border">Enquiry</Link>
                </div>
                <div className="flex flex-col gap-4 text-sm items-center sm:items-start">
                    <p className="text-lg text-tcspink">Products</p>
                    <Link href="/" className="hover-border">Product lists</Link>
                    <Link href="/" className="hover-border">Popular</Link>
                    <Link href="/" className="hover-border">Top seller</Link>
                    <Link href="/" className="hover-border">New Arrival</Link>
                </div>
                <div className="flex flex-col gap-4 text-sm items-center sm:items-start">
                    <p className="text-lg text-tcspink">Company</p>
                    <Link href="/" className="hover-border">About</Link>
                    <Link href="/" className="hover-border">Contact</Link>
                    <Link href="/" className="hover-border">Location</Link>
                    <Link href="/" className="hover-border">Service</Link>
                </div>
            </div>
        </div>
    )
}