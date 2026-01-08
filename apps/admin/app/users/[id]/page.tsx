import AppLineChart from "@/components/AppLineChart";
import EditUser from "@/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { BadgeCheck, Citrus, Shield, Trophy } from "lucide-react";


export default function SingleUserPage() {
    return (
        <div className="">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/users">User</BreadcrumbLink>
                    </BreadcrumbItem>
                        <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Uday</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            {/* CONTAINER */}
            <div className="flex flex-col xl:flex-row gap-8 mt-4">
                {/* LEFT */}
                <div className="w-full xl:w-1/3 space-y-6">
                    {/* USER BADGE CONTAINER */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <h1 className="text-xl font-semibold">User Badges</h1>
                        <div className="flex gap-4 mt-4">
                            <HoverCard>
                                <HoverCardTrigger><BadgeCheck size={36} className="rounded-full p-2 bg-blue-500/30 border-blue-500/50"/></HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Verified User</h1>
                                    <p className="text-sm text-muted-foreground">This user has been verified by the admin.</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger><Shield size={36} className="rounded-full p-2 bg-green-500/30 border-green-500/50"/></HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Admin</h1>
                                    <p className="text-sm text-muted-foreground">Admin user have access to all features and can manage users.</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger><Trophy size={36} className="rounded-full p-2 bg-yellow-500/30 border-yellow-500/50"/></HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Awarded</h1>
                                    <p className="text-sm text-muted-foreground">This user has been awarded for their contributions.</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger><Citrus size={36} className="rounded-full p-2 bg-red-500/30 border-red-500/50"/></HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Popular</h1>
                                    <p className="text-sm text-muted-foreground">This user has been popular in the community.</p>
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </div>
                    {/* INFO CONTAINER */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl font-semibold">User Infomation</h1>
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="secondary" className="cursor-pointer">Edit</Button>
                                </SheetTrigger>
                                <EditUser />
                            </Sheet>
                        </div>
                        <div className="space-y-4 mt-4">
                            <p className="text-sm text-muted-foreground">Profile Completion</p>
                            <Progress value={66} />
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Fullname: </span>
                                <span>Uday R</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Email: </span>
                                <span>uday12704@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Phone: </span>
                                <span>9385423570</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Address: </span>
                                <span>123/Trichy</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">City: </span>
                                <span>Trichy</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-4">Joined on 26-12-2025</p>
                        </div>
                    </div>
                    
                </div>
                {/* RIGHT */}
                <div className="w-full xl:w-2/3 space-y-6">
                    {/* USER CARD CONTAINER */}
                    <div className="bg-primary-foreground p-4 rounded-lg space-y-4">
                        <div className="flex items-center gap-4">
                            <Avatar className="size-12">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <h1 className="text-xl font-semibold">John Doe</h1>
                        </div>
                        <p className="text-sm text-muted-foreground">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore mollitia voluptas provident et repellat, alias, eius deleniti sequi eaque dolorem nemo earum facilis suscipit perferendis eos dicta consequuntur pariatur incidunt.</p>
                    </div>
                    {/* CHART CONATAINER */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <h1 className="text-xl font-semibold">User Activity</h1>
                        <AppLineChart />
                    </div>
                </div>
            </div>
        </div>
    )
}