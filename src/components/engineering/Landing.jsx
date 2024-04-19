import Link from "next/link";
import { SiGithub } from "react-icons/si";
import Pages from "@/public/engineering/pages.webp";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full pt-12 md:pt-0 md:min-h-screen">
      <div className="w-9/12 md:w-5/12 ml-0 md:ml-12">
        <div className="border-l-8 border-bear-teal/40 px-5 text-white mb-6">
          <div className="text-3xl md:text-5xl mb-4 font-bold">
            Hackathon Website
          </div>
          <p className="text-lg md:text-xl">
            A template website simplifying the management process for UC
            Riverside&apos;s hackathon events.
          </p>
        </div>
        <Link
          href="https://github.com/acm-ucr/hackathon-website"
          className="text-white rounded-xl flex items-center gap-3 text-2xl hover:opacity-50 my-4 hover:cursor-pointer pb-4"
        >
          <SiGithub className="text-3xl" />
          GitHub
        </Link>
      </div>
      <Image
        src={Pages}
        alt="Hackathon Web Pages"
        className="drop-shadow-lg w-11/12 mb-6"
        width={750}
        height={750}
      />
    </div>
  );
};

export default Landing;
