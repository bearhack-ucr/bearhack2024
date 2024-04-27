import { judges } from "@/data/Judges";
import Member from "@/components/Member";

const Judges = () => {
  return (
    <div className="w-full text-white flex flex-col items-center my-14">
      <div className="text-4xl lg:text-5xl font-header">Judges</div>
      <div className="flex w-3/4 flex-wrap justify-center gap-4 sm:px-4 md:gap-8">
        {judges.map(({ name, position, image }, index) => (
          <Member name={name} position={position} image={image} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Judges;
