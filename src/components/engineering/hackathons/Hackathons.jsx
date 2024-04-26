import Image from "next/image";
import { HackathonsData } from "@/data/engineering/HackathonsData";
import Details from "./Details";

export const Hackathons = () => {
  return (
    <div className="text-center md:text-left">
      <div className="flex font-bold justify-center text-white text-4xl md:text-5xl md:my-10 pt-6 pb-4">
        Hackathons at UCR
      </div>

      {HackathonsData.map((data, index) => (
        <div key={index} className="flex flex-col md:flex-row my-2">
          {index % 2 === 1 ? (
            <Details data={data} />
          ) : (
            <Image
              src={data.image}
              objectFit="cover"
              alt={data.alt1}
              width={600}
              height={600}
            />
          )}

          {index % 2 === 1 ? (
            <Image
              src={data.image}
              objectFit="cover"
              alt={data.alt1}
              width={600}
              height={600}
            />
          ) : (
            <Details data={data} />
          )}
        </div>
      ))}
      <div className="w-full h-52" />
    </div>
  );
};

export default Hackathons;
