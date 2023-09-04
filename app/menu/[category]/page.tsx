import { pizzas } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

const Category = ({ params }: { params: { category: string } }) => {
  return (
    <main className="flex flex-wrap text-primary min-w-screen">
      {pizzas.map((pizza) => (
        <Link href={`/product/${pizza.id}`} key={pizza.id}
          className='w-full sm:w-1/2 h-[60vh]  lg:w-1/3 border-r-2 border-secondary border-b-2 p-2  flex flex-col justify-between group'>
          {/* IMAGE CONTAINER */}
          {pizza.img && (
            <div className="relative h-3/4 ">
              <Image src={pizza.img} alt={pizza.title} fill className='object-contain' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="flex flex-wrap gap-2 justify-between items-center font-bold p-2 uppercase text-xl md:text-2xl xl:text-3xl ">
            <h1 className=" flex flex-wrap">{pizza.title}</h1>
            <h2 className='group-hover:hidden'>₽{pizza.price}</h2>
            <button className='hidden group-hover:block bg-third py-2 px-4 text-white rounded-sm'>Добавить</button>
          </div>
        </Link>
      ))}
    </main>
  );
};

export default Category;
