"use client";
import React from "react";
import { useState } from "react";
import Arrows from "../../../public/faqArrows.svg";
import Image from "next/image";

const ToggleSelection = ({ title, children }) => {
  const [state, setState] = useState(false);
  return (
    <div className="bg-bear-dark py-2">
      <button
        onClick={() => setState(!state)}
        className="flex items-center justify-between w-full py-2 pr-8 text-white font-chonburi text-xl"
      >
        {title}
        <Image
          src={Arrows}
          width={25}
          className={`${state && "rotate-180"} duration-300`}
        />
      </button>
      {!state && (
        <div className="flex flex-row justify-end">
          <div className="h-[1px] w-full bg-white"> </div>
          <div className="w-2 h-2 bg-white transform rotate-45 absolute flex -mt-1"></div>
        </div>
      )}
      {state && (
        <div className="py-4 text-white text-lg font-cormorant">{children}</div>
      )}
      {state && (
        <div className="flex flex-row justify-end">
          <div className="h-[1px] w-full bg-white"> </div>
          <div className="w-2 h-2 bg-white transform rotate-45 absolute flex -mt-1"></div>
        </div>
      )}
    </div>
  );
};

export default ToggleSelection;
