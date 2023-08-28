"use client";
import { useState, useEffect } from "react";
import { CountdownTimeDelta, DeadlineType, calcDate } from "@/utils/calcDate";


const initialState = {
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
  milliseconds: "00",
};

const CountDown = ({ deadline }: { deadline: DeadlineType }) => {
  const [count, setCount] = useState<CountdownTimeDelta>(initialState);

  const { days, hours, minutes, seconds } = count;

  useEffect(() => {
    const rest = calcDate(deadline);
    const interval = setInterval(() => {
      if (!rest) {
        return;
      }
      setCount(rest);
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="text-4xl lg:text-5xl xl:text-6xl text-secondary font-bold">{`${days}:${hours}:${minutes}:${seconds}`}</div>
  );
};

export default CountDown;
