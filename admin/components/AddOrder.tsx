"use client"

import { SheetContent, SheetDescription, SheetHeader, SheetTitle, } from "./ui/sheet";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";

const formSchema = z.object({
  amount: z.string().min(1, {message: "Amount must be at least 1!"}),
  userId: z.string().min(1, {message: "User ID is required!"}),
  status: z.enum(["pending", "processing", "success", "failed"]),
})

export default function AddOrder() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })
    return (
        <SheetContent>
            <SheetHeader>
            <SheetTitle className="mb-4">Add Order</SheetTitle>
            <SheetDescription asChild>
                <Form {...form}>
                    <form className="space-y-6">
                        <FormField 
                            control = {form.control}
                            name = "amount"
                            render = {({field}) => (
                                <FormItem>
                                    <FormLabel>Amount</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Enter the amount of the order.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />
                        <FormField 
                            control = {form.control}
                            name = "userId"
                            render = {({field}) => (
                                <FormItem>
                                    <FormLabel>User ID</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Enter the User Id.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />
                        <FormField 
                            control = {form.control}
                            name = "status"
                            render = {({field}) => (
                                <FormItem>
                                    <FormLabel>Status</FormLabel>
                                    <FormControl>
                                        <Select>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select a status" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="pending">Pending</SelectItem>
                                                <SelectItem value="processing">Processing</SelectItem>
                                                <SelectItem value="success">Success</SelectItem>
                                                <SelectItem value="failed">Failed</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormDescription>
                                        Enter the order status.
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