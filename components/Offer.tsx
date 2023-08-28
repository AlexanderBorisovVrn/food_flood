"use client";
import Image from "next/image";
import { alegreya } from "@/app/layout";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <section className="bg-black  h-screen flex flex-col md:flex-row md:justify-between md:h-[80vh]">
      {/* TEXT CONTAINER */}
      <div className=" flex flex-1 flex-col center text-center gap-2 md:gap-8 p-6 text-white">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold ">
          Изысканый бургер с котлетой из мраморной говядины
        </h1>
        <p className={"text-white text-xl  md:text-2xl xl:text-3xl my-2 " + alegreya.className}>
          Применение инновационных технологий приготовления пищи для сохранения
          качества блюд
        </p>
        {/* <CountDown />*/}
        <button className="bg-third w-2/3 p-2 md:p-4 my-4 md:text-2xl rounded-sm ">
          Заказать сейчас
        </button>
      </div>

      {/* IMAGE CONTAINER */}
      <div className="relative flex-1 w-full md:h-full">
        <Image
          src="/offer/offer_burger1.png"
          alt="offer"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
};
export default Offer;
