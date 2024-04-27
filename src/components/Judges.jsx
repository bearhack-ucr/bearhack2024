import { judges } from "@/data/Judges";
import Member from "@/components/Member";

const Judges = () => {
  return (
    <div className="w-full text-white flex flex-col items-center my-14 gap-16">
      <div className="text-4xl lg:text-5xl font-header">Judges</div>
      <div className="grid grid-cols-1 sm:flex w-3/4 flex-wrap justify-center gap-8 sm:px-4">
        {judges.map(({ name, position, image }, index) => (
          <Member name={name} position={position} image={image} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Judges;
