import Image from "next/image";
import { pizzas } from "@/data/data";
import Price from "@/components/Price";
import PriceWidget from "@/components/PriceWidget";

const ProductPage = ({ params }: { params: { id: string } }) => {
  const pizza = pizzas.find((pizza) => pizza.id === +params.id);
  if (!pizza) return <div>NOt found</div>;
  return (
    <main className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-third md:flex-row ">
      {/* IMAGE CONTAINER */}
      <div className="relative h-1/2">
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
      <div className="flex flex-col gap-2"> 
        <h1>{pizza?.title}</h1>
        <p>{pizza?.desc}</p>
        <PriceWidget options={pizza.options} price={pizza.price} />
      </div>
    </main>
  );
};

export default ProductPage;
