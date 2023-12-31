import titleBg from "@/assets/title-bg.svg";
import Link from "./Link.jsx";
import Image from "next/image";
import HorizontalLine from "./HorizontalLine.jsx";
import Countdown from "./Countdown.jsx";
import { CONFIG } from "@/data/Config.js";

const Title = () => {
  return (
    <div className="w-full h-screen text-white flex flex-col justify-center items-center lg:items-end">
      <div className="absolute hidden lg:flex w-full h-full z-0">
        <Image
          src={titleBg}
          alt={"Background"}
          className="object-cover h-full"
        />
      </div>
      <div className="flex flex-col z-1 p-8 lg:p-16 gap-2 rounded-lg bg-slate-900 lg:bg-transparent">
        <div className="p-8 flex flex-col items-center lg:items-end gap-2">
          <div className="text-3xl lg:text-5xl font-header font-bold">
            BEARHACK 2024
          </div>
          <div className="text-lg lg:text-xl font-paragraph text-bear-teal-100">
            {CONFIG.date.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
            })}
            {"-"}
            {CONFIG.lastDate.getDate()}
            {", "}
            {CONFIG.lastDate.getFullYear()}
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-end lg:flex-row px-8">
          <Link text={"Register"} link={"/form/participant"} />
          <Link text={"Mentor"} link={"/form/mentor"} />
          <Link text={"Volunteer"} link={"/form/volunteer"} />
          {/* <Link text={"Sponsor"} link={"/form/sponsor"} /> */}
        </div>
        <div className="w-4/5 m-auto">
          <HorizontalLine />
        </div>
        <div className="m-auto">
          <Countdown />
        </div>
      </div>
    </div>
  );
};

export default Title;
