"use client";
import { OptionType } from "@/data/data";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
type SizeButtonsType = {
  options: OptionType[];
  cb: Dispatch<SetStateAction<number>>;
};

const OptionsButtons = ({ options, cb }: SizeButtonsType) => {
  const [current, setCurrent] = useState<string>(options[0]?.title);

  
  const styles = "capitalize px-4 py-2 rounded-md border ";
  const buttons = options.length>0 && options.map(({title,additionalPrice}) => {
    return (
      <button
        key={title}
        onClick={() => {
          setCurrent(title);
          cb(additionalPrice);
        }}
        // onFocus={}
        className={title === current ? styles + "bg-third text-white" : styles}
      >
        {title}
      </button>
    );
  });
  return <div className="flex justify-between">{buttons}</div>;
};

export default OptionsButtons;
