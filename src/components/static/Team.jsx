import { members, directors } from "@/data/static/TeamMembers";
import Member from "@/components/static/Member";

const Team = () => {
  return (
    <div className="w-full text-white flex flex-col items-center my-14">
      <div className="text-5xl font-header">Meet the Team</div>
      <div className="text-3xl font-header my-4">Directors</div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {directors.map(({ name, position, image }, index) => (
          <Member name={name} position={position} image={image} key={index} />
        ))}
      </div>
      <div className="text-3xl font-header my-4">Leads</div>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 md:gap-8">
        {members.map(({ name, position, image }, index) => (
          <Member name={name} position={position} image={image} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Team;
