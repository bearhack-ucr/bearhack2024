"use client";
import { useState, useEffect } from "react";
import { CONFIG } from "@/data/Config";

const Digits = ({ value, unit }) => {
  return (
    <div className="flex flex-col items-center gap-3 last:hidden sm:last:flex">
      <div className="flex gap-1 lg:!gap-2">
        {value
          .toString()
          .padStart(2, "0")
          .split("")
          .map((digit, index) => (
            <div
              className="text-lg lg:text-4xl font-bold text-white bg-bear-teal-100/50 p-[10px] lg:p-3 rounded-lg"
              key={index}
            >
              {digit}
            </div>
          ))}
      </div>
      <div>{unit}</div>
    </div>
  );
};

const Countdown = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = CONFIG.date.getTime() - new Date().getTime();

      setTime({
        days:
          Math.floor(diff / (1000 * 60 * 60 * 24)) > 0
            ? Math.floor(diff / (1000 * 60 * 60 * 24))
            : 0,
        hours:
          Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) > 0
            ? Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            : 0,
        minutes:
          Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)) > 0
            ? Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
            : 0,
        seconds:
          Math.floor((diff % (1000 * 60 * 60)) / 1000) % 60 > 0
            ? Math.floor((diff % (1000 * 60 * 60)) / 1000) % 60
            : 0,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-3 md:!gap-6 font-paragraph">
      {Object.entries(time).map(([unit, value], index) => (
        <Digits key={index} unit={unit} value={value} />
      ))}
    </div>
  );
};

export default Countdown;
