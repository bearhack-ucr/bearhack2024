import { RiJavascriptFill } from "react-icons/ri";
import {
  SiArduino,
  SiDiscord,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoCPlusPlus, BiLogoMongodb, BiLogoPython } from "react-icons/bi";

export const TECHSTACKS = {
  JavaScript: <RiJavascriptFill />,
  "Next.js": <SiNextdotjs />,
  firebase: <IoLogoFirebase />,
  tailwind: <SiTailwindcss />,
  MongoDB: <BiLogoMongodb />,
  Arduino: <SiArduino />,
  "C++": <BiLogoCPlusPlus />,
  Python: <BiLogoPython />,
  Discord: <SiDiscord />,
};
export const HACKPACKS = [
  {
    link: "https://github.com/acm-ucr/arduino-hackpack",
    text: "Hardware Arduino Hackpack",
    techs: ["C++", "Arduino"],
  },
  {
    link: "https://github.com/acm-ucr/discord_python_hackpack",
    text: "Discord Python Hackpack",
    techs: ["Python", "SiDiscord"],
  },
  {
    link: "https://github.com/acm-ucr/python_hackpack",
    text: "Python Hackpack",
    techs: ["Python"],
  },
  {
    link: "https://github.com/acm-ucr/nextjs-hackpack",
    text: "Next.js Hackpack",
    techs: ["JavaScript", "Next.js", "tailwind"],
  },
];
