import Image from "next/image";
import hat from "@/public/hat.svg";

const Error = ({ code, error, message, dev }) => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center fixed bg-bear-dark">
      <Image src={hat} alt="Loading Hat" className="w-1/6" />
      <p className="text-center text-5xl font-header font-extrabold text-white m-0">
        {code}
      </p>
      <p className="text-center text-lg md:text-2xl font-bold font-header text-white m-4">
        {error}
      </p>
      <p className="text-center text-sm md:text-lg text-white m-0">{message}</p>
      {dev && (
        <p className="text-center text-sm md:text-lg text-hackathon-blue-200 m-0">
          Developer Notes: {dev}
        </p>
      )}
    </div>
  );
};

export default Error;
