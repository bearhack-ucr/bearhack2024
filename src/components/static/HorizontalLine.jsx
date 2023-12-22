import { LuDiamond } from "react-icons/lu";

const HorizontalLine = () => {
  return (
    <div className="w-full flex items-center gap-8">
      <div className="h-0.5 w-full bg-gray-300 rounded-full"></div>
      <LuDiamond className="text-5xl text-gray-300" />
      <div className="h-0.5 w-full bg-gray-300 rounded-full"></div>
    </div>
  );
};
export default HorizontalLine;
