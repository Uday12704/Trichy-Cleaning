"use client"

import { SheetContent, SheetDescription, SheetHeader, SheetTitle, } from "./ui/sheet";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const formSchema = z.object({
  fullname: z.string().min(2, {message: "Username must be at least 2 characters"}).max(100),
  email: z.string().email({message: "Invalid email address"}),
  phone: z.string().min(10, {message: "Phone number must be between 10 to 15 digits"}).max(15),
  address: z.string().min(2, {message: "Address must be at least 2 characters"}),
  city: z.string().min(2, {message: "City must be at least 2 characters"}),
})

export default function AddUser() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })
    return (
        <SheetContent>
            <SheetHeader>
            <SheetTitle className="mb-4">Add User</SheetTitle>
            <SheetDescription asChild>
                <Form {...form}>
                    <form className="space-y-6">
                        <FormField 
                            control = {form.control}
                            name = "fullname"
                            render = {({field}) => (
                                <FormItem>
                                    <FormLabel>Fullname</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Enter user full name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />
                        <FormField 
                            control = {form.control}
                            name = "email"
                            render = {({field}) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Only admin can see your email.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />
                        <FormField 
                            control = {form.control}
                            name = "phone"
                            render = {({field}) => (
                                <FormItem>
                                    <FormLabel>Phone</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Only admin can see your phone number (optional).
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />
                        <FormField 
                            control = {form.control}
                            name = "address"
                            render = {({field}) => (
                                <FormItem>
                                    <FormLabel>Address</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Enter user address (optional).
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control = {form.control}
                            name = "city"
                            render = {({field}) => (
                                <FormItem>
                                    <FormLabel>City</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Enter user city (optional).
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </SheetDescription>
            </SheetHeader>
        </SheetContent>
    )
}