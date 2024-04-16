import Image from "next/image";
import { TOP_SPONSORS } from "@/data/Sponsors";
import { LOW_SPONSORS } from "@/data/Sponsors";
import Link from "next/link";

const Sponsors = () => {
  return (
    <div className="w-full justify-center items-center h-full flex flex-col bg-bear-dark mt-20">
      <div className="font-header text-4xl md:text-5xl text-white flex mb-4 md:mb-20">
        Sponsors
      </div>
      <div className="w-2/3 grid grid-cols-2 grid-rows-2 md:grid-rows-none md:grid-cols-3 gap-12 place-items-center">
        {TOP_SPONSORS.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="hover:cursor-pointer hover:scale-105"
          >
            <Image className="rounded-full" src={item.logo} />
          </Link>
        ))}
      </div>
      <div className="w-2/3 md:w-1/3 grid grid-cols-2 grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-12 place-items-center">
        {LOW_SPONSORS.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="hover:cursor-pointer hover:scale-105"
          >
            <Image className="rounded-full" src={item.logo} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
