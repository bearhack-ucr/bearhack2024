import Image from "next/image";

const TeamMember = ({ name, position, image }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="rounded-full border border-white">
        <div className="m-2 rounded-full border-3 border-white">
          <div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden flex justify-center items-center">
            <Image src={image} className="object-fill w-full h-full" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 text-center">
        <div className="text-lg md:text-2xl font-header">{name}</div>
        <div className="text-sm md:text-base font-paragraph">{position}</div>
      </div>
    </div>
  );
};

export default TeamMember;
