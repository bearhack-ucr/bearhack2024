import titleBg from "@/public/title-bg.svg";
import Link from "./Link.jsx";
import Image from "next/image";
import HorizontalLine from "./HorizontalLine.jsx";
import Countdown from "./Countdown.jsx";
import CONFIG from "@/data/Config.js";
import swirlTop from "@/public/swirlTop.svg";
import moredots from "@/public/moredots.svg";
import dots from "@/public/dots.svg";
import bigswirly from "@/public/bigswirly.svg";
import smallswirly from "@/public/smallswirly.svg";
import { useMemo } from "react";

import Butterfly from "./Butterfly.jsx";

const createStars = (starsToCreate) => {
  const array = Array(starsToCreate);

  array.forEach((star) => {
    star.top = `${Math.floor(Math.random() * 150 - 20)}%`;
    star.left = `${Math.floor(Math.random() * 100)}%`;
  });
  return array;
};

// shooting star is created with a growing end bound (container width)
// and a delayed growing start bound (inner item width), the container
// has overflow-hidden to properly clip and create the effect
const createStreak = (amount) => {
  return [...new Array(amount)].map(() => ({
    top: `${Math.floor(Math.random() * 150 - 20)}%`,
    left: `${Math.floor(Math.random() * 100)}%`,
    transform: `rotate(${Math.random() * Math.PI}rad) scaleX(${
      3 + Math.random() * 30
    })`,
    animationDelay: `${-Math.floor(Math.random() * 10000)}ms`,
  }));
};

const Title = () => {
  const smallStars = useMemo(() => createStars(50), []);
  const shootingStars = useMemo(() => createStreak(20), []);

  return (
    <div className="w-full h-screen text-white flex flex-col justify-center items-center lg:items-end bg-gradient-to-b from-bear-dark via-bear-teal/50 to-bear-dark lg:from-transparent">
      <div className="absolute hidden lg:flex w-full h-full z-0">
        <Image
          src={titleBg}
          alt={"Background"}
          className="object-cover h-full"
        />
      </div>
      <div className="absolute xl:left-[7%] md:left-[7%] top-[56%]">
        <Image src={dots} alt={"dots"} className="animate-pulse" />
      </div>
      <div className="absolute left-[22.5%] top-[14%]">
        <Image src={moredots} alt={"moredots"} className="animate-pulse" />
      </div>
      <div className="absolute left-[22.5%] top-[43%]">
        <Image src={bigswirly} alt={"bigswirly"} className="animate-spinny" />
      </div>
      <div className="absolute left-[25%] top-[30%]">
        <Image
          src={smallswirly}
          alt={"smallswirly"}
          className="animate-spinny"
        />
      </div>
      <div className="flex flex-col z-1 p-10 lg:p-16 gap-2  border-bear-dark/50 rounded-3xl lg:bg-transparent z-10">
        <div className=" xl:hidden  flex justify-center -mt-16">
          <Image src={swirlTop} className="w-2/3" alt="swirl" />
        </div>

        <div className="absolute top-0 left-0 w-full h-screen overflow-hidden">
          <>
            {smallStars.map((star, index) => (
              <span
                style={{ top: star.top, left: star.left }}
                key={index}
                className="absolute animate-twinkling-star bg-white h-1 w-1 rounded-full -z-10"
              ></span>
            ))}
          </>
          <>
            {shootingStars.map((style, index) => (
              <span
                style={style}
                key={index}
                className="absolute -z-10 animate-fade-in"
              >
                <span className="absolute animate-shooting-star-outer animation-delay-inherit w-8 h-[2px]">
                  <span className="absolute bg-white animate-shooting-star-inner animation-delay-inherit w-8 h-[2px]"></span>
                </span>
              </span>
            ))}
          </>
        </div>

        <div className="p-8 flex flex-col items-center lg:items-end gap-2">
          <div className="relative text-4xl flex whitespace-nowrap lg:text-5xl font-header font-bold">
            BEARHACK 2024
            <div className="absolute right-0 top-0 scale-50 lg:scale-100 translate-x-1/2 -translate-y-1/2">
              <Butterfly />
            </div>
          </div>
          <div className="font-header text-xl lg:text-4xl font-bold">
            {" "}
            Healthcare Hackathon
          </div>
          <div className="text-lg lg:text-xl font-paragraph text-bear-teal-100">
            {CONFIG.dateObject.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
            })}
            {"-"}
            {CONFIG.lastDateObject.getDate()}
            {", "}
            {CONFIG.lastDateObject.getFullYear()}
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-end lg:flex-row px-8">
          <Link text={"Register"} link={"/form/participant"} />
          <Link text={"Mentor"} link={"/form/mentor"} />
          <Link text={"Volunteer"} link={"/form/volunteer"} />
          <Link text={"Sponsor"} link={"/form/sponsor"} />
        </div>
        <div className="w-4/5 m-auto">
          <HorizontalLine />
        </div>
        <div className="flex justify-center">
          <Countdown />
        </div>
      </div>
    </div>
  );
};

export default Title;
