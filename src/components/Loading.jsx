import Image from "next/image";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import hat from "@/public/hat.svg";

const Loading = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      <Image src={hat} alt="Loading Hat" className="w-1/6" />
      <p className="text-4xl font-bold text-white">Loading...</p>
      <AiOutlineLoading3Quarters className="animate-spin text-white" />
    </div>
  );
};

export default Loading;
