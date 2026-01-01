"use client"

import { SheetContent, SheetDescription, SheetHeader, SheetTitle, } from "./ui/sheet";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ScrollArea } from "./ui/scroll-area";

const categories = ["Tools", "Cleaning Liquids", "Mats", "Plasticwares", "Others"] as const;
const formSchema = z.object({
  name: z.string().min(1, {message: "Product name is required!"}),
  shortDescription: z.string().min(2, {message: "Short description is required!"}).max(60),
  description: z.string().min(1, {message: "Description is required!"}),
  price: z.number().min(1, {message: "Price is required!"}),
  category: z.enum(categories),
  image: z.string(),
})

export default function AddProduct() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })
    return (
        <SheetContent>
            <ScrollArea className="h-screen">
            <SheetHeader>
            <SheetTitle className="mb-4">Add Product</SheetTitle>
            <SheetDescription asChild>
                <Form {...form}>
                    <form className="space-y-6">
                        <FormField 
                            control = {form.control}
                            name = "name"
                            render = {({field}) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Enter the name of the product.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />
                        <FormField 
                            control = {form.control}
                            name = "shortDescription"
                            render = {({field}) => (
                                <FormItem>
                                    <FormLabel>Short Description</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Enter the short description of the product.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />
                        <FormField 
                            control = {form.control}
                            name = "description"
                            render = {({field}) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Enter the description of the product.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />
                        <FormField 
                            control = {form.control}
                            name = "price"
                            render = {({field}) => (
                                <FormItem>
                                    <FormLabel>Price</FormLabel>
                                    <FormControl>
                                        <Input type="number" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Enter the price of the product.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control = {form.control}
                            name = "category"
                            render = {({field}) => (
                                <FormItem>
                                    <FormLabel>Category</FormLabel>
                                    <FormControl>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {categories.map((category) => (
                                                    <SelectItem key={category} value={category}>{category}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormDescription>
                                        Enter the category of the product.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control = {form.control}
                            name = "image"
                            render = {({field}) => (
                                <FormItem>
                                    <FormLabel>Image</FormLabel>
                                    <FormControl>
                                        <Input type="file" accept="image/*" />
                                    </FormControl>
                                    <FormDescription>
                                        Upload the image of the product.
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
            </ScrollArea>
        </SheetContent>
    )
}