"use client";

import { Dispatch, useEffect, useState } from "react";

const Counter = ({
  current,
  cb,
}: {
  current: number;
  cb: Dispatch<React.SetStateAction<number>>;
}) => {
  const quantityHandler = (i: number) => {
    cb((current + i));
  };
  const buttonStyle = 'disabled:hidden'
  return (
    <div className="w-full h-14 md:h-16 lg:h-18 xl:h-20 flex items-center flex-wrap text-lg md:text-xl lg:text-2xl xl:text-3xl">
      <div className="flex flex-1 h-full justify-between items-center  border  p-2 md:p-4">
      <span>Колличество</span>
      <div className="flex gap-2 lg:gap-4">
        <button onClick={() => quantityHandler(-1)} disabled={current === 0} className={buttonStyle}>{"<"}</button>
        <span className="">{current}</span>
        <button
          onClick={() => {
            quantityHandler(1);
          }}
        >
          {">"}
        </button>
      </div>
      </div>
      <button className="bg-third text-white h-full px-4 uppercase">Добавить</button>
    </div>
  );
};

export default Counter;
