import { members, directors, committee } from "@/data/TeamMembers";
import Member from "@/components/Member";

const Team = () => {
  return (
    <div className="w-full text-white flex flex-col items-center my-14">
      <div className="text-4xl lg:text-5xl font-header">Meet the Team</div>
      <div className="text-2xl lg:text-3xl font-header my-4">Directors</div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {directors.map(({ name, position, image }, index) => (
          <Member name={name} position={position} image={image} key={index} />
        ))}
      </div>
      <div className="text-2xl lg:text-3xl font-header my-4">Leads</div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 px-4 md:gap-6 md:px-6 lg:gap-8 lg:px-8">
        {members.map(({ name, position, image }, index) => (
          <Member name={name} position={position} image={image} key={index} />
        ))}
      </div>
      <div className="text-2xl lg:text-3xl font-header my-4">Committees</div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {Object.entries(committee).map(([key, values], index) => (
          <div
            className="text-white font-paragraph text-center flex  flex-col items-center"
            key={index}
          >
            <p className=" text-transparent bg-gradient-to-r from-bear-purple via-bear-teal to-bear-teal-100 w-fit bg-clip-text text-xl font-bold">
              {key}
            </p>
            {values.map((name, index) => (
              <p key={index}>{name}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
