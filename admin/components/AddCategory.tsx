"use client"

import { SheetContent, SheetDescription, SheetHeader, SheetTitle, } from "./ui/sheet";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const formSchema = z.object({
  name: z.string().min(1, {message: "Name is required!"}).max(50),
})

export default function AddCategory() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })
    return (
        <SheetContent>
            <SheetHeader>
            <SheetTitle className="mb-4">Add Category</SheetTitle>
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
                                        Enter the category name.
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