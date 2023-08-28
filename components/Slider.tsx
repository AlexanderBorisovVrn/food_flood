"use client";
import Image from 'next/image'
import { useEffect, useState } from "react";
import { alegreya } from "@/app/layout";

const data = [
  {
    id: 1,
    title: "Мир простых и быстрых удовольствий!",
    img: "/slider/slider.jpg",
  },
  {
    id: 2,
    title: "Наслаждение не только быстро, но и вкусно!",
    img: "/slider/slider2.jpg",
  },
  {
    id: 3,
    title: "FoodFlood делает жизнь вкуснее!",
    img: "/slider/slider3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState<any>(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev: any) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="flex flex-col md:flex-row h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] bg-gray ">
      {/*LEFT SIDE */}
      <div className="h-1/2 w-full md:w-1/2 md:h-full center flex-col gap-8 text-primary font-bold">
        <h1
          className={
            "text-3xl md:text-5xl xl:text-6xl uppercase p-4 md:p-8 text-center  " +
            alegreya.className
          }
        >
          {data[currentSlide].title}
        </h1>
        <button className="bg-third p-4 px-8 md:text-xl rounded-sm text-white shadow-bx hover:opacity-95">
          Заказать сейчас
        </button>
      </div>
      {/* RIGHT SIDE */}
      <div className="h-1/2 w-full md:w-1/2 md:h-auto relative">
        <Image
          src={data[currentSlide].img}
          alt=""
          fill
          sizes='100vw,100vh'
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Slider;
