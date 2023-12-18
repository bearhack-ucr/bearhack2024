import butterfly from "@/assets/butterfly.svg";
import hat from "@/assets/hat.svg";
import book from "@/assets/book.svg";
import HorizontalLine from "./HorizontalLine";
import Link from "./Link.jsx";
import Image from "next/image.js";

const GetInvolved = () => {
  return (
    <div className="w-full text-white flex flex-col justify-center items-center gap-14">
      <div className="flex-row flex justify-center items-center gap-3 w-5/6 md:w-1/2 ">
        <div className="w-24">
          <Image src={butterfly} alt={"butterfly"} />
        </div>
        <p className="font-chonburi text-4xl">Get Involved</p>
      </div>

      <div className="flex flex-col lg:flex-row w-5/6 lg:w-2/3 justify-between items-center gap-2">
        <div className="w-36 h-36">
          <Image src={hat} />
        </div>
        <div className="flex flex-col w-3/4">
          <p className="font-cherry text-2xl md:text-3xl !text-center lg:!text-start -mb-2">
            Become a Mentor
          </p>
          <HorizontalLine />
          <p className="font-cherry text-lg md:text-xl !text-center lg:!text-start mt-2">
            In cursus turpis massa tincidunt dui ut ornare lectus sit. Viverra
            vitae congue eu consequat ac felis.
          </p>
          <div className="flex justify-center lg:justify-end">
            <Link text={"Mentor"} link={"/form/mentor"} />
          </div>
        </div>
      </div>

      <div className=" flex flex-col lg:flex-row w-5/6 lg:w-2/3 justify-between items-center gap-5">
        <div className="lg:hidden w-36 h-36">
          <Image src={book} />
        </div>
        <div className="flex flex-col w-3/4">
          <p className="font-cherry text-2xl md:text-3xl !text-center lg:!text-start -mb-2">
            Become a Volunteer
          </p>
          <HorizontalLine />
          <p className="font-cherry text-lg md:text-xl !text-center lg:!text-start mt-2">
            In cursus turpis massa tincidunt dui ut ornare lectus sit. Viverra
            vitae congue eu consequat ac felis.
          </p>
          <div className="flex justify-center lg:justify-end">
            <Link text={"Volunteer"} link={"/form/volunteer"} />
          </div>
        </div>
        <div className="hidden lg:block w-36 h-36">
          <Image src={book} />
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
