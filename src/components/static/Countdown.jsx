"use client";

import { useEffect, useState } from "react";

// approximate units for a simple implementation, can use Date API if more accuracy is needed
const units = [
  {
    unitSingular: "second",
    unitPlural: "seconds",
    millis: 1000,
  },
  {
    unitSingular: "minute",
    unitPlural: "minutes",
    millis: 60 * 1000,
  },
  {
    unitSingular: "hour",
    unitPlural: "hours",
    millis: 60 * 60 * 1000,
  },
  {
    unitSingular: "day",
    unitPlural: "days",
    millis: 24 * 60 * 60 * 1000,
  },
];

/**
 * returns block data that can be rendered for some duration
 * @param {number} duration milliseconds to convert into larger time units
 * @return {{unit:string, amount:number}[]}
 */
function calculateBlocksForDuration(duration) {
  let left = duration;
  const blocks = [];
  const blockCount = 4;
  for (let i = units.length - 1; i >= 0 && blocks.length < blockCount; --i) {
    const { unitSingular, unitPlural, millis } = units[i];
    const blocksIfRemainingAdded = blocks.length + i + 1;
    const amount = Math.floor(left / millis);
    left -= millis * amount;
    // add by default since not enough || first nonzero || was first blocks already added
    if (blocksIfRemainingAdded <= blockCount || amount > 0 || blocks.length) {
      blocks.push({
        unit: amount == 1 ? unitSingular : unitPlural,
        amount: amount,
      });
    }
  }
  return blocks;
}

/**
 * Renders a countdown element with the 3 most significant time units.
 * @param {{targetTime: number}} props targetTime in millis since unix epoch (same as `Date.now()`)
 * @return {JSX.Element}
 */
const Countdown = ({ targetTime }) => {
  const [blocks, setBlocks] = useState(calculateBlocksForDuration(0, 0));
  useEffect(() => {
    const update = () => {
      setBlocks(
        calculateBlocksForDuration(Math.max(targetTime - Date.now(), 0))
      );
    };
    update();
    const intervalId = setInterval(update, 1000);
    return () => clearInterval(intervalId);
  }, [targetTime]);

  return (
    <div className="flex gap-3 md:!gap-6 font-paragraph">
      {blocks.map(({ unit, amount }, index) => (
        <div
          className="flex flex-col items-center gap-3 last:hidden sm:last:flex"
          key={index}
        >
          <div className="flex gap-1 lg:!gap-2">
            {amount
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
      ))}
    </div>
  );
};

export default Countdown;
