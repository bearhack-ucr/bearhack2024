import React from "react";
import Frame from "@/assets/frame.svg";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="w-full h-screen md:h-full text-white bg-black flex flex-col justify-center items-center">
      <div className="grid grid-cols-2 w-full h-full md:w-1/2 mt-16">
        <Image
          src={Frame}
          alt={"frame"}
          className="hidden lg:block lg:scale-75 rotate-0"
        />
        <div className="flex justify-end items-start">
          <Image
            src={Frame}
            alt={"frame"}
            className="hidden lg:block md:scale-75 rotate-90"
          />
        </div>
      </div>

      <div className="flex flex-col w-5/6 lg:w-3/12 items-center gap-8 -my-24">
        <p className="font-chonburi text-xl md:text-4xl flex justify-center !text-center lg:!text-center -mb-1">
          About us
        </p>
        <div className="h-0.5 w-10/12 bg-gray-300 rounded-full"></div>
        <p className="font-cherry text-sm md:text-xl !text-center lg:!text-start mt-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="grid grid-cols-2 w-full h-full md:w-1/2 2xl:w-1/2 -mt-3 mb-16">
        <Image
          src={Frame}
          alt={"frame"}
          className="hidden lg:block md:scale-75 -rotate-90"
        />
        <div className="flex justify-end items-start">
          <Image
            src={Frame}
            alt={"frame"}
            className="hidden lg:block md:scale-75 rotate-180"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
