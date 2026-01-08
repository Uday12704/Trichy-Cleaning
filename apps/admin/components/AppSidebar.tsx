import { Calendar, ChevronRight, Home, Inbox, Search, Settings, User2, User, LogOut, Plus, SoapDispenserDroplet, ShoppingBasket, HandCoins } from "lucide-react"
 
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import Link from "next/link"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "./ui/dropdown-menu"
import { Sheet, SheetTrigger } from "./ui/sheet"
import AddOrder from "./AddOrder"
import AddUser from "./AddUser"
import AddCategory from "./AddCategory"
import AddProduct from "./AddProduct"

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]   

export default function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="/">
                                <Image src="/logo-icon.svg" alt="logo" width={20} height={20}/>
                                <span>Trichy Cleaning Solutions</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarSeparator />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon className="text-tcspink"/>
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Products</SidebarGroupLabel>
                    <SidebarGroupAction title="Add Project">
                        <Plus /> <span className="sr-only">Add Product</span>
                    </SidebarGroupAction>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/products">
                                        <SoapDispenserDroplet className="text-tcspink" />
                                        <span>All Products</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Sheet>
                                        <SheetTrigger asChild>
                                            <SidebarMenuButton asChild>
                                                <Link href="#">
                                                    <Plus className="text-tcspink"/>
                                                    <span>Add Products</span>
                                                </Link>
                                            </SidebarMenuButton>
                                        </SheetTrigger>
                                        <AddProduct />
                                    </Sheet>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Sheet>
                                        <SheetTrigger asChild>
                                            <SidebarMenuButton asChild>
                                                <Link href="#">
                                                    <Plus className="text-tcspink"/>
                                                    <span>Add Category</span>
                                                </Link>
                                            </SidebarMenuButton>
                                        </SheetTrigger>
                                        <AddCategory />
                                    </Sheet>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Users</SidebarGroupLabel>
                    <SidebarGroupAction title="Add Project">
                        <Plus /> <span className="sr-only">Add user</span>
                    </SidebarGroupAction>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/users">
                                        <User className="text-tcspink" />
                                        <span>All Users</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Sheet>
                                        <SheetTrigger asChild>
                                            <SidebarMenuButton asChild>
                                                <Link href="#">
                                                    <Plus className="text-tcspink" />
                                                    <span>Add Users</span>
                                                </Link>
                                            </SidebarMenuButton>
                                        </SheetTrigger>
                                        <AddUser />
                                    </Sheet>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Orders / Payments</SidebarGroupLabel>
                    <SidebarGroupAction title="Add Project">
                        <Plus /> <span className="sr-only">Add Order</span>
                    </SidebarGroupAction>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/payments">
                                        <HandCoins className="text-tcspink"/>
                                        <span>See All Transactions</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Sheet>
                                        <SheetTrigger asChild>
                                            <SidebarMenuButton asChild>
                                                <Link href="#">
                                                    <Plus className="text-tcspink"/>
                                                    <span>Add Orders</span>
                                                </Link>
                                            </SidebarMenuButton>
                                        </SheetTrigger>
                                        <AddOrder />
                                    </Sheet>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User2 /> <span>John Doe</span> <ChevronRight className="ml-auto"/>
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" side="right">
                                <DropdownMenuItem><User/>Profile</DropdownMenuItem>
                                <DropdownMenuItem><Settings/>Settings</DropdownMenuItem>
                                <DropdownMenuItem variant="destructive"><LogOut/>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}