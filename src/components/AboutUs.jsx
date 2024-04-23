import React from "react";
import Frame from "@/public/frame.svg";
import Image from "next/image";
import AboutUsText from "./AboutUsText";

const AboutUs = () => {
  return (
    <div className="w-full h-screen md:h-full text-white bg-black flex flex-col justify-center items-center">
      <div className="grid grid-cols-2 w-full md:h-full md:w-1/2 md:mt-16 ">
        <Image
          src={Frame}
          alt={"frame"}
          className="scale-50 md:scale-75 rotate-0 "
        />
        <div className="flex justify-end items-start">
          <Image
            src={Frame}
            alt={"frame"}
            className="scale-50 md:scale-75 rotate-90"
          />
        </div>
      </div>
      <AboutUsText />
      <div className="grid grid-cols-2 w-full md:h-full md:w-1/2 2xl:w-1/2 mb-10 md:mb-32">
        <Image
          src={Frame}
          alt={"frame"}
          className="scale-50 md:scale-75 -rotate-90"
        />
        <div className="flex justify-end items-start">
          <Image
            src={Frame}
            alt={"frame"}
            className="scale-50 md:scale-75 rotate-180"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
