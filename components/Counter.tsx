"use client";

import { Dispatch, useEffect, useState } from "react";

const Counter = ({
  current,
  cb,
}: {
  current: number;
  cb: Dispatch<React.SetStateAction<number>>;
}) => {
  const handler = (i: number) => {
    cb((current + i));
  };
  const buttonStyle = 'disabled:hidden'
  return (
    <div className="w-ful flex justify-between border rounded-md py-2 px-4">

      <span>Колличество</span>
      <div className="flex gap-1">
        <button onClick={() => handler(-1)} disabled={current===0 } className={buttonStyle}>{"<"}</button>
        <span>{current}</span>
        <button
          onClick={() => {
            handler(1);
          }}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Counter;
