import { Products } from "@/types/types";
import Image from "next/image";


const getData = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/products', {
      cache: 'no-store'
    })
    return response.json();
  } catch (error) {
    throw new Error("Error!!!")
  }
}

const Featured = async() => {
  const data:Products = await getData()
  const products = data.map((product) => {
    return (
      <article
        key={product.id}
        className="w-screen min-h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-gray transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
      >
        {/* IMAGE CONTAINER */}
        <div className="h-[40%] w-full  flex relative hover:scale-105 transition-all duration-200 ">
          <Image
            src={product.img}
            fill
            alt={product.title}
            className="object-contain"
            sizes="100%,100%"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className=" flex-1 flex-col flex items center gap-4 text-dark">
          <h1 className="text-xl md:text-2xl xl:text-3xl mt-2 md:mt-4 xl:mt-8 font-bold uppercase">{product.title}</h1>
          <p className="px-4 py-2 text-center md:text-lg lg:text-xl ">{product.desc}</p>
          <span className="text-xl md:text-2xl xl:text-3xl font-bold">{`₽${product.price}`}</span>
          <button className="bg-third w-1/2 xl:w-3/4 py-4 px-4 xl:py-6 xl:px-6 my-4 text-white text-lg md:text-xl xl:text-2xl shadow-bx rounded-sm">
            Добавить в корзину
          </button>
        </div>
      </article>
    );
  });
  return (
    <section className="flex min-w-screen overflow-x-scroll">
      {/* WRAPPER */}
      <div className="w-max flex">{products}</div>
    </section>
  );
};

export default Featured;
