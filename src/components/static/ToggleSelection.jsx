import React from "react";
import { useState } from "react";
import { LiaAngleDoubleUpSolid } from "react-icons/lia";

const ToggleSelection = ({ title, children }) => {
  const [state, setState] = useState(false);
  return (
    <div className="bg-bear-dark py-2">
      <button
        onClick={() => setState(!state)}
        className="flex items-center justify-between w-full py-3 text-white font-header text-sm md:text-3xl"
      >
        {title}
        <LiaAngleDoubleUpSolid
          className={`${state && "rotate-180"} duration-500 w-1/12 `}
        />
      </button>
      {!state && (
        <div className="flex flex-row justify-end">
          <div className="h-[1px] w-full bg-white"> </div>
          <div className="w-2 h-2 bg-white transform rotate-45 absolute flex -mt-1"></div>
        </div>
      )}
      <div
        className={`transition-opacity duration-500 ease-in-out ${
          state ? "opacity-100 " : "opacity-0 "
        }`}
      >
        {state && (
          <div
            className={`px-10 pb-6 text-white text-xs md:text-lg font-paragraph `}
          >
            {children}
          </div>
        )}
      </div>
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
