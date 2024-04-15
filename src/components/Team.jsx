import { members, directors } from "@/data/TeamMembers";
import Member from "@/components/Member";

const Team = () => {
  return (
    <div className="w-full text-white flex flex-col items-center my-14">
      <div className="text-4xl lg:text-5xl font-header">Meet the Team</div>
      <div className="text-2xl lg:text-3xl font-header my-4">Directors</div>
      <div className="flex w-3/4 flex-wrap justify-center gap-4 md:gap-8">
        {directors.map(({ name, position, image }, index) => (
          <Member name={name} position={position} image={image} key={index} />
        ))}
      </div>
      <div className="text-2xl lg:text-3xl font-header my-4">Leads</div>
      <div className="flex w-3/4 flex-wrap justify-center gap-4 px-4 md:gap-6 md:px-6 lg:gap-8 lg:px-8">
        {members.map(({ name, position, image }, index) => (
          <Member name={name} position={position} image={image} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Team;
