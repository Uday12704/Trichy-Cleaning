"use client"

import { useState } from "react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";
import { CalendarIcon } from "lucide-react";


export default function TodoList() {

    const [date, setDate] = useState<Date | undefined>(new Date());
    const [open, setOpen] = useState(false);

    return (
        <div className="">
            <h1 className="text-lg font-medium mb-6">Todo list</h1>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button className="w-full">
                        <CalendarIcon />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-auto">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(date) => {
                            setDate(date);
                            setOpen(false);
                        }}
                        captionLayout="dropdown"
                    />
                </PopoverContent>
            </Popover>
            {/* Todo List */}
            <ScrollArea className="h-[400px] mt-4 p-4">
                {/* List Items */}
                <div className="flex flex-col gap-3">
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="terms1" checked/>
                                <Label htmlFor="terms1" className="text-sm text-muted-foreground">Accept terms and conditions</Label>
                        </div>
                    </Card>
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="terms2" />
                                <Label htmlFor="terms2" className="text-sm text-muted-foreground">Accept terms and conditions</Label>
                        </div>
                    </Card>
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="terms3" checked/>
                                <Label htmlFor="terms3" className="text-sm text-muted-foreground">Accept terms and conditions</Label>
                        </div>
                    </Card>
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="terms4" checked/>
                                <Label htmlFor="terms4" className="text-sm text-muted-foreground">Accept terms and conditions</Label>
                        </div>
                    </Card>
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="terms5" />
                                <Label htmlFor="terms5" className="text-sm text-muted-foreground">Accept terms and conditions</Label>
                        </div>
                    </Card>
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="terms5" />
                                <Label htmlFor="terms5" className="text-sm text-muted-foreground">Accept terms and conditions</Label>
                        </div>
                    </Card>
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="terms6" />
                                <Label htmlFor="terms6" className="text-sm text-muted-foreground">Accept terms and conditions</Label>
                        </div>
                    </Card>
                </div>
            </ScrollArea>
        </div>
    )
}