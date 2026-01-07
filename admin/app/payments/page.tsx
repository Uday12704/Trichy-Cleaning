import { columns, Payment } from "./columns";
import { DataTable } from "./data-table";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const getData = async (): Promise<Payment[]> => {
    return [
        {
            id: "728ed521",
            amount: 500,
            status: "success",
            fullname: "John Doe",
            userId: "1",
            email: "johndoe@example.com",
        },
        {
            id: "728ed522",
            amount: 550,
            status: "pending",
            fullname: "Jane Doe",
            userId: "2",
            email: "janedoe@example.com",
        },
        {
            id: "728ed523",
            amount: 200,
            status: "failed",
            fullname: "Jane Doe",
            userId: "3",
            email: "janedoe@example.com",
        },
        {
            id: "728ed524",
            amount: 123,
            status: "success",
            fullname: "John Doe",
            userId: "4",
            email: "johndoe@example.com",
        },
        {
            id: "728ed525",
            amount: 1500,
            status: "success",
            fullname: "John Doe",
            userId: "5",
            email: "johndoe@example.com",
        },
        {
            id: "728ed526",
            amount: 230,
            status: "pending",
            fullname: "Jane Doe",
            userId: "6",
            email: "janedoe@example.com",
        },
        {
            id: "728ed527",
            amount: 250,
            status: "failed",
            fullname: "John Doe",
            userId: "7",
            email: "johndoe@example.com",
        },
        {
            id: "728ed528",
            amount: 500,
            status: "success",
            fullname: "Jane Doe",
            userId: "8",
            email: "janedoe@example.com",
        },
        {
            id: "728ed529",
            amount: 200,
            status: "pending",
            fullname: "John Doe",
            userId: "9",
            email: "johndoe@example.com",
        },
        {
            id: "728ed530",
            amount: 300,
            status: "failed",
            fullname: "Jane Doe",
            userId: "10",
            email: "janedoe@example.com",
        },
        {
            id: "728ed531",
            amount: 300,
            status: "success",
            fullname: "Jane Doe",
            userId: "11",
            email: "janedoe@example.com",
        },
    ]
}

export default async function PaymentsPage() {
    const data = await getData();
    return (
        <div className="">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Payments</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="mt-4 mb-8 px-4 py-2 bg-secondary rounded-md">
                <h1 className="font-semibold">All Payments</h1>
            </div>
            <DataTable columns={columns} data={data}/>
        </div>
    )
}