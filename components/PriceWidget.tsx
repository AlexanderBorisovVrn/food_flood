"use client";
import React from "react";
import Price from "./Price";
import OptionsButtons from "./OptionsButtons";
import { Product } from "@/types/types";
import Counter from "./Counter";



const calcPrice = (price: number, additionalPrice: number, count: number) => {
  return (price + additionalPrice) * count;
};
export type PriceWidgetType = {
  price: number;
  options: Product["options"];
};
const PriceWidget = ({ price, options }: PriceWidgetType) => {
  const [additionalPrice, setAdditionalPrice] = React.useState<number>(0);
  const [count, setCount] = React.useState<number>(0);

  const currentPrice = calcPrice(price, additionalPrice, count);

  return (
    <div className="flex flex-col gap-4 flex-wrap md:gap-6 xl:gap-10">
      <Price price={currentPrice} />
      <Counter cb={setCount} current={count} />
      <OptionsButtons options={options} cb={setAdditionalPrice} />
      
    </div>
  );
};

export default PriceWidget;
