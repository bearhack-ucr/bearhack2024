import teamMembers from "@/data/static/TeamMembers";
import TeamMember from "@/components/static/TeamMember";

const Team = () => {
  return (
    <div className="w-full text-white flex flex-col items-center gap-14 my-28">
      <div className="text-5xl font-header">Meet the Team</div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {teamMembers.map(({ name, position, image }, index) => (
          <TeamMember
            name={name}
            position={position}
            image={image}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
