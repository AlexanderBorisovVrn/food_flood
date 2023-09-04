"use client";
import { Dispatch, SetStateAction, useState } from "react";
type SizeButtonsType = {
  options:string[]
  cb: Dispatch<SetStateAction<string>>;
};

const ChangeSizeButtons = ({ options, cb }: SizeButtonsType) => {
  const buttons = options.map((title) => {
    return (
      <button
      key={title}
        onClick={() => {
          cb(title)
          cb(title)
        }}
        className="focus:bg-third capitalize px-4 py-2 focus:text-white rounded-md border"
      >
        {title}
      </button>
    );
  });
  return <div className="flex justify-between">{buttons}</div>;
};

export default ChangeSizeButtons;
