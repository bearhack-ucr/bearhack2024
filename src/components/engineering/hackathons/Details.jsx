import Image from "next/image";
import Link from "next/link";

const Details = ({ data }) => {
  return (
    <div className="flex flex-col items-center gap-y-4 md:gap-y-8 justify-center px-[5%]">
      <Image
        src={data.logo}
        objectFit="cover"
        alt={data.alt2}
        width={200}
        height={200}
        className="mt-4"
      />
      <div className="text-white text-5xl md:text-6xl font-bold">
        {data.title}
      </div>
      <div className="text-xl md:text-2xl text-white">{data.text}</div>
      <Link
        className="w-fit rounded bg-bear-teal/40 px-4 py-1 text-lg text-white mb-4"
        href="/"
      >
        Details
      </Link>
    </div>
  );
};

export default Details;
