import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = ({ customStyle = false }) => {
  return customStyle ? (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4 bg-bear-dark">
      <p className="text-3xl font-bold text-white font-header">Loading...</p>
      <AiOutlineLoading3Quarters className="animate-spin text-white" />
    </div>
  ) : (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      <p className="text-3xl font-bold text-hackathon-blue-100">Loading...</p>
      <AiOutlineLoading3Quarters className="animate-spin text-hackathon-blue-100" />
    </div>
  );
};

export default Loading;
