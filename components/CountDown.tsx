"use client";
import { useState, useEffect } from "react";
import { CountdownTimeDelta, DeadlineType, calcDate } from "@/utils/calcDate";

const end = new Date("2023-09-09");
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
    const rest = calcDate(end);
    const interval = setInterval(() => {
      if (!rest) {
        return;
      }
      setCount(rest);
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="text-2xl md:text-3xl xl:text-4xl text-secondary font-bold">{`${days}:${hours}:${minutes}:${seconds}`}</div>
  );
};

export default CountDown;
