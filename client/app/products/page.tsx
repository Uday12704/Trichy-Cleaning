import ProductList from "../components/ProductList";

export default async function productsPage({searchParams} : {searchParams: Promise<{category:string}>}) {
    const category = (await searchParams).category;
    return (
        <div className="">
            <ProductList category={category} params="products" />
        </div>
    )
}