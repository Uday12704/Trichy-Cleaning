"use client"

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function Filter() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathName = usePathname();

    const handleFilter = (value: string) => {
        const params = new URLSearchParams(searchParams);
        params.set("sort", value);
        router.push(`${pathName}?${params.toString()}`, { scroll: false });
    }
    return (
        <div className="flex items-center justify-end gap-2 text-gray-500 my-5">
            <span>Sort by:</span>
            <select name="sort" id="sort" className='ring-1 ring-gray-200 rounded-md shadow-md text-sm p-1' onChange={(e) => handleFilter(e.target.value)}>
                <option value="oldest">Oldest</option>
                <option value="newest">Newest</option>
                <option value="asc">Price: low to high</option>
                <option value="desc">Price: high to low</option>
            </select>
        </div>
    )
}