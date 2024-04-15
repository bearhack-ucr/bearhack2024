import Image from "next/image";
import Link from "next/link";

const Hacks = ({ id, img, alt1, logo, alt2, title, text }) => {
  return !(id % 2 === 0) ? (
    <div className="flex">
      <Image src={img} alt={alt1} className="w-1/4" />
      <div className="flex flex-col gap-y-8 justify-center px-[5%] w-3/4">
        <Image src={logo} alt={alt2} />
        <div className="text-white text-6xl font-bold">{title}</div>
        <div className="text-2xl text-white">{text}</div>
        <Link
          className="w-fit rounded bg-bear-teal/40 px-4 py-1 text-lg text-white hover:opacity-80"
          href="/"
        >
          Details
        </Link>
      </div>
    </div>
  ) : (
    <div className="flex">
      <div className="flex flex-col gap-y-8 justify-center px-[5%] py-10 w-3/4">
        <Image src={logo} alt={alt2} />
        <div className="text-white text-6xl font-bold">{title}</div>
        <div className="text-2xl text-white">{text}</div>
        <Link
          className="w-fit rounded bg-bear-teal/40 px-4 py-1 text-lg text-white hover:opacity-80"
          href="/"
        >
          Details
        </Link>
      </div>
      <Image src={img} alt={alt1} className="w-1/4" />
    </div>
  );
};

export default Hacks;
