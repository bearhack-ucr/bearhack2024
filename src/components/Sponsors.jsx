import Image from "next/image";
import { SPONSORS } from "@/data/Sponsors";
import Link from "next/link";

const Sponsors = () => {
  return (
    <div className="w-full justify-center items-center h-full flex flex-col bg-bear-dark mt-20">
      <div className="font-header text-4xl md:text-5xl text-white flex mb-4 md:mb-20">
        Sponsors
      </div>
      <div className="flex w-full flex-wrap justify-center items-center gap-4 sm:px-4 md:gap-8">
        {SPONSORS.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="hover:cursor-pointer w-1/3 lg:w-1/4 hover:scale-105"
          >
            <Image className="rounded-full" src={item.logo} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
