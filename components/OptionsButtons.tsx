"use client";
import {OptionType} from '@/types/types'
import { Dispatch, SetStateAction, useEffect, useState } from "react";
type SizeButtonsType = {
  options: OptionType[];
  cb: Dispatch<SetStateAction<number>>;
};

const OptionsButtons = ({ options, cb }: SizeButtonsType) => {
  const [current, setCurrent] = useState<string>(options[0]?.title);


  const styles = "capitalize py-2 md:py-4 xl:py-6 rounded-md border w-full text-xl lg:text-2xl 2xl:text-3xl ";
  const buttons = options.length > 0 && options.map(({ title, additionalPrice }) => {
    return (
      <button
        key={title}
        onClick={() => {
          setCurrent(title);
          cb(additionalPrice);
        }}
        className={title === current ? styles + "bg-third text-white ring-1 ring-third" : styles}
      >
        {title}
      </button>
    );
  });
  return <div className="flex justify-between gap-2 md:gap-4">{buttons}</div>;
};

export default OptionsButtons;
