import Image from "next/image"
import Link from "next/link"
import SearchBar from "./SearchBar"
import { Home } from "lucide-react"
import { Bell } from "lucide-react"
import ShoppingCartIcon from "./ShoppingCartIcon"

export default function navbar(){
    return (
        <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-1">
            <Link href="/" className="flex items-center">
                <Image 
                    src="/logo.jpg"
                    alt="TCS logo"
                    width={100}
                    height={100}
                    className="w-30 h-12 md:w-50 md:h-18 hidden sm:block">
                </Image>

                <Image 
                    src="/logo-icon.svg"
                    alt="TCS logo"
                    width={36}
                    height={36}
                    className="w-10 h-10 md:w-25 md:h-25 block sm:hidden">
                </Image>
            </Link>

            <div className="flex items-center gap-7">
                <SearchBar />
                <Link href="/">
                    <Home className="w-5 h-5 text-tcspink" />
                </Link>
                <Bell className="w-5 h-5 text-tcspink cursor-pointer" />
                <ShoppingCartIcon/>
                <Link href="/login">Sign in</Link>
            </div>
        </nav>
    )
}