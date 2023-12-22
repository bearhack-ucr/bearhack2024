import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-bear-dark gap-4">
      <p className="text-3xl font-bold text-white font-header">Loading...</p>
      <AiOutlineLoading3Quarters className="animate-spin text-white" />
    </div>
  );
};

export default Loading;
