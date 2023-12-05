import Link from "./Link.jsx";
const GetInvolved = () => {
  return (
    <div className="w-full text-white flex flex-col justify-center items-center gap-8">
      <div className="flex-row flex justify-center items-center gap-3">
        <div className="w-12 h-12 bg-blue-200">Butterfly</div>
        <p className="font-chonburi text-4xl">Get Involved</p>
      </div>

      <div className="flex flex-col lg:flex-row w-5/6 lg:w-2/3 justify-between items-center gap-2">
        <div className="w-36 h-36 bg-green-400">Hat</div>
        <div className="flex flex-col w-3/4">
          <p className="font-cherry text-2xl md:text-3xl !text-center lg:!text-start">
            Become a Mentor
          </p>
          <p className="font-cherry text-lg md:text-xl !text-center lg:!text-start">
            In cursus turpis massa tincidunt dui ut ornare lectus sit. Viverra
            vitae congue eu consequat ac felis.
          </p>
          <div className="flex justify-center lg:justify-end">
            <Link text={"Mentor"} link={"/form/mentor"} />
          </div>
        </div>
      </div>

      <div className=" flex flex-col lg:flex-row w-5/6 lg:w-2/3 justify-between items-center gap-2">
        <div className=" lg:hidden w-36 h-36 bg-green-400">Book</div>
        <div className="flex flex-col w-3/4">
          <p className="font-cherry text-2xl md:text-3xl !text-center lg:!text-start">
            Become a Volunteer
          </p>
          <p className="font-cherry text-lg md:text-xl !text-center lg:!text-start">
            In cursus turpis massa tincidunt dui ut ornare lectus sit. Viverra
            vitae congue eu consequat ac felis.
          </p>
          <div className="flex justify-center lg:justify-end">
            <Link text={"Volunteer"} link={"/form/volunteer"} />
          </div>
        </div>
        <div className="hidden lg:block w-36 h-36 bg-green-400">Book</div>
      </div>

      <div className="w-16 h-16 flex justify-start bg-blue-200">Butterfly</div>
    </div>
  );
};

export default GetInvolved;
