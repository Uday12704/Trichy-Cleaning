import { columns, User } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<User[]> => {
    return [
        {
            id: "728ed521a",
            avatar : "https://avatars.githubusercontent.com/u/124599?v=4",
            status: "active",
            fullname: "John Doe",
            email: "johndoe@example.com",
        },
        {
            id: "728ed522b",
            avatar : "https://avatars.githubusercontent.com/u/124599?v=4",
            status: "inactive",
            fullname: "Jane Doe",
            email: "janedoe@example.com",
        },
        {
            id: "728ed523c",
            avatar : "https://avatars.githubusercontent.com/u/124599?v=4",
            status: "inactive",
            fullname: "Jane Doe",
            email: "janedoe@example.com",
        },
        {
            id: "728ed524d",
            avatar : "https://avatars.githubusercontent.com/u/124599?v=4",
            status: "active",
            fullname: "John Doe",
            email: "johndoe@example.com",
        },
        {
            id: "728ed525e",
            avatar : "https://avatars.githubusercontent.com/u/124599?v=4",
            status: "active",
            fullname: "John Doe",
            email: "johndoe@example.com",
        },
        {
            id: "728ed526f",
            avatar : "https://avatars.githubusercontent.com/u/124599?v=4",
            status: "inactive",
            fullname: "Jane Doe",
            email: "janedoe@example.com",
        },
        {
            id: "728ed527g",
            avatar : "https://avatars.githubusercontent.com/u/124599?v=4",
            status: "inactive",
            fullname: "John Doe",
            email: "johndoe@example.com",
        },
        {
            id: "728ed528h",
            avatar : "https://avatars.githubusercontent.com/u/124599?v=4",
            status: "active",
            fullname: "Jane Doe",
            email: "janedoe@example.com",
        },
        {
            id: "728ed529i",
            avatar : "https://avatars.githubusercontent.com/u/124599?v=4",
            status: "active",
            fullname: "John Doe",
            email: "johndoe@example.com",
        },
        {
            id: "728ed530j",
            avatar : "https://avatars.githubusercontent.com/u/124599?v=4",
            status: "active",
            fullname: "Jane Doe",
            email: "janedoe@example.com",
        },
        {
            id: "728ed531k",
            avatar : "https://avatars.githubusercontent.com/u/124599?v=4",
            status: "active",
            fullname: "Jane Doe",
            email: "janedoe@example.com",
        },
    ]
}

export default async function UsersPage() {
    const data = await getData();
    return (
        <div className="">
            <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
                <h1 className="font-semibold">All Users</h1>
            </div>
            <DataTable columns={columns} data={data}/>
        </div>
    )
}