import { Products } from "@/types/types";
import Image from "next/image";
import Link from "next/link";



const getData = async (cat: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/products?cat=${cat}`, {
      cache: 'no-store'
    })
    return response.json();
  } catch (error) {
    throw new Error("Error!!!")
  }
}

const Category = async ({ params }: { params: { category: string } }) => {
  const products: Products = await getData(params.category)
  return (
    <main className="flex flex-wrap text-primary min-w-screen">
      {products.map((product) => (
        <Link href={`/product/${product.id}`} key={product.id}
          className='w-full sm:w-1/2 h-[60vh]  lg:w-1/3 border-r-2 border-secondary border-b-2 p-2  flex flex-col justify-between group'>
          {/* IMAGE CONTAINER */}
          {product.img && (
            <div className="relative h-3/4 ">
              <Image src={product.img} alt={product.title} fill className='object-contain' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="flex flex-wrap gap-2 justify-between items-center font-bold p-2 uppercase text-xl md:text-2xl xl:text-3xl ">
            <h1 className=" flex flex-wrap">{product.title}</h1>
            <h2 className='group-hover:hidden'>₽{product.price}</h2>
            <button className='hidden group-hover:block bg-third py-2 px-4 text-white rounded-sm'>Добавить</button>
          </div>
        </Link>
      ))}
    </main>
  );
};

export default Category;
