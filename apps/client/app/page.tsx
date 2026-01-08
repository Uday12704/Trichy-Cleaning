import Image from "next/image";
import ProductList from "./components/ProductList";
import Link from "next/link";

export default async function Home({searchParams} : {searchParams:Promise<{category:string}>;}) {

  const category = (await searchParams).category;
  return (
    <div className="mt-5">
      <div className="ml-10 absolute flex flex-col justify-center gap-3 aspect-3/2">
        <h1 className="text-gray-800 font-clean font-bold text-[19px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl leading-tight">Professional Cleaning <br/> Supplies for Home.</h1>
        <p className="text-gray-500 text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl w-55 sm:w-80 lg:w-105 xl:w-150">Premium quality Cleaning liquids and tools delivered to your door.</p>
        <Link href={category ? `products/?category=${category}` : "/products"}>
          <button className="lg:mt-2 xl:mt-3 p-2 bg-tcspink w-20 text-xs sm:text-sm sm:w-24 md:text-base md:w-28 lg:text-lg lg:w-32 text-white font-bold rounded-3xl shadow-glow cursor-pointer transition-all duration-400 hover:-translate-y-1">Shop now</button>
        </Link>
      </div>
      <div className="flex justify-end shadow-lg">
        <Image 
          src="/clean-home1.png"
          alt="home image"
          width={1000}
          height={1000}
          className="size-auto aspect-7/4">
        </Image>
      </div>
      <ProductList category={category} params="home" />
    </div>
  );
}
