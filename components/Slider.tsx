"use client";

import { useEffect, useState } from "react";
import { alegreya } from "@/app/layout";

const data = [
  {
    id: 1,
    title: "Мы обещаем только лучшее!",
    img: "/slider/slider.jpg",
  },
  {
    id: 2,
    title: '"Быстро, вкусно, с любовью - наш рецепт успеха!"',
    img: "/slider/slider2.jpg",
  },
  {
    id: 3,
    title:
      "Покори свои гастрономические потребности с нашими креативными блюдами!",
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
    <div className="felx flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]">
      {/* LEFT SIDE */}
      <div className="h-1/2  center flex-col gap-8 text-primary font-bold">
        <h1
          className={
            "text-5xl md:text-6xl xl:text-7xl uppercase p-4 text-center " +
            alegreya.className
          }
        >
          {data[currentSlide].title}
        </h1>
        <button className="bg-third p-4 px-8 rounded-md text-white">
          Заказать сейчас
        </button>
      </div>
      {/* RIGHT SIDE */}
      <div className="h-1/2 relative">
        <img
          src={data[currentSlide].img}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
