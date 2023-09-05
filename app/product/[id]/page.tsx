import Image from "next/image";
import { pizzas } from "@/data/data";
import PriceWidget from "@/components/PriceWidget";

const ProductPage = ({ params }: { params: { id: string } }) => {
  const pizza = pizzas.find((pizza) => pizza.id === +params.id);
  if (!pizza) return <div>NOt found</div>;
  return (
    <main className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-third md:flex-row md:gap-8 md:items-center ">
      {/* IMAGE CONTAINER */}
      <div className="relative h-1/2 md:h-[70%]  w-full">
        {pizza?.img && (
          <Image
            src={pizza.img}
            alt={pizza.title}
            fill
            className="object-contain"
          />
        )}
      </div>
      {/* TEXT CONTAINER */}
      <div className="flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8"> 
        <h1 className="uppercase font-bold text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">{pizza?.title}</h1>
        <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl">{pizza?.desc}</p>
        <PriceWidget options={pizza.options} price={pizza.price} />
      </div>
    </main>
  );
};

export default ProductPage;
