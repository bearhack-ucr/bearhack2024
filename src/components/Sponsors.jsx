import Image from "next/image";
import { SPONSORS } from "@/data/Sponsors";

const Sponsors = () => {
  return (
    <div className="w-full justify-center items-center h-full flex flex-col bg-bear-dark mt-20">
      <div className="font-header text-4xl md:text-5xl text-white flex mb-4 md:mb-20">
        Sponsors
      </div>
      <div className="w-2/3 grid grid-cols-2 grid-rows-2 md:grid-rows-none md:grid-cols-3 gap-12 place-items-center">
        {SPONSORS.map((item, index) => (
          <Image key={index} src={item} />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
