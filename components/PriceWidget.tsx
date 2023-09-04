"use client";
import React from "react";
import Price from "./Price";
import ChangeSizeButtons from "./ChangeSizeButtons";
import { Product } from "@/data/data";
import Counter from "./Counter";

const calcPrice = (price: number, additionalPrice: number, count: number) => {
  return (price + additionalPrice) * count;
};
export type PriceWidgetType = {
  price: number;
  options: Product["options"];
};
const PriceWidget = ({ price, options }: PriceWidgetType) => {
  const [size, setSize] = React.useState<string>("");
  const [count, setCount] = React.useState<number>(0);
  const currentOption = options.find((option) => option.title === size);
  const addiadditionalPrice = currentOption ? currentOption.additionalPrice : 0;
  const currentPrice = calcPrice(price, addiadditionalPrice, count)
  console.log(addiadditionalPrice)
  return (
    <div className="flex flex-col gap-4">
      <Price price={currentPrice} />
      <Counter cb={setCount} current={count} />
      <ChangeSizeButtons options={["Small", "Medium", "Large"]} cb={setSize} />
    </div>
  );
};

export default PriceWidget;
