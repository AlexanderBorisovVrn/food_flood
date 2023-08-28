"use client";
import Image from "next/image";
import { alegreya } from "@/app/layout";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <section className="bg-offer-back bg-bottom bg-cover bg-no-repeat min-h-screen flex flex-col xl:flex-row  lg:p-10">
      {/* TEXT CONTAINER */}
      <div className=" flex flex-1 flex-col center text-center xl:flex-1 gap-8 p-6 xl:p-10 text-white">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold ">
          Изысканный бургер с котлетой из мраморной говядины
        </h1>
        <p className={"text-white text-xl  md:text-2xl lg:text-3xl my-2 md:p-8 " + alegreya.className}>
          Применение инновационных технологий приготовления пищи для сохранения
          качества блюд
        </p>
        <CountDown deadline="2023-09-09"/>
        <button className="bg-third px-4 xs:px-14 lg:px-20 py-2 xs:py-4 lg:py-8 my-4 md:text-2xl lg:text-3xl rounded-sm ">
          Заказать сейчас
        </button>
      </div>

      {/* IMAGE CONTAINER */}
      <div className="relative flex-1 w-full min-h-[350px] md:min-h-[600px]">
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
