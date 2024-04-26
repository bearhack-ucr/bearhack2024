import TRACKS from "@/data/Tracks";
import Image from "next/image";

const Tracks = () => {
  return (
    <div className="w-full text-white flex flex-col items-center gap-8 my-14 lg:pb-14">
      <div className="text-4xl lg:text-5xl font-header text-white">Tracks</div>
      <div className="grid grid-cols-2 lg:flex gap-8">
        {TRACKS.map(({ name, description, image, offset }, index) => (
          <div
            className={`flex md:flex-col ${
              index % 2 === 1 && "md:flex-col-reverse"
            }`}
            key={index}
          >
            <div
              className={`${
                [
                  "animate-bounce-1/4",
                  "animate-bounce-2/4",
                  "animate-bounce-3/4",
                  "animate-bounce-4/4",
                ][index]
              } relative px-6 lg:px-8 pt-20 pb-36 w-40 lg:w-48 h-96 lg:h-[28rem] flex flex-col gap-4 justify-start text-center border border-white rounded-full bg-gradient-to-b from-bear-page-gradient-1 to-bear-page-gradient-2 overflow-hidden`}
            >
              <div className={`absolute bottom-0 ${offset}`}>
                <Image src={image} />
              </div>
              <div className="font-header font-bold text-lg md:text-xl">
                {name}
              </div>
              <div className="text-sm md:text-base z-10">{description}</div>
            </div>
            <div className="hidden lg:block h-16"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracks;
