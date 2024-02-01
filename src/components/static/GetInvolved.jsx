import butterfly from "@/public/butterfly.svg";
import hat from "@/public/hat.svg";
import book from "@/public/book.svg";
import HorizontalLine from "./HorizontalLine";
import Link from "./Link.jsx";
import Image from "next/image.js";

const GetInvolved = () => {
  return (
    <div className="w-full text-white flex flex-col justify-center items-center gap-14">
      <div className="flex justify-center items-center gap-3 w-5/6 md:w-1/2">
        <Image src={butterfly} alt="butterfly" className="w-24" />
        <p className="font-header text-4xl lg:text-5xl flex whitespace-nowrap">
          Get Involved
        </p>
        <Image src={butterfly} alt="butterfly" className="w-24 -scale-x-100" />
      </div>

      <div className="flex flex-col lg:flex-row w-5/6 lg:w-2/3 justify-between items-center gap-2">
        <div className="w-36 h-36">
          <Image src={hat} />
        </div>
        <div className="flex flex-col w-3/4">
          <p className="font-header text-2xl md:text-4xl !text-center lg:!text-start -mb-2">
            Become a Mentor
          </p>
          <HorizontalLine />
          <p className="font-paragraph text-lg md:text-xl !text-center lg:!text-start mt-2">
            Not interested in hacking, but still interested in the
            behind-the-scenes of BearHack? Great, we&apos;d love to have you on
            our team. Apply to be a volunteer today!
          </p>
          <div className="flex justify-center lg:justify-end md:mt-0 mt-4">
            <Link text={"Mentor"} link={"/form/mentor"} />
          </div>
        </div>
      </div>

      <div className=" flex flex-col lg:flex-row w-5/6 lg:w-2/3 justify-between items-center gap-10 lg:gap-5">
        <div className="lg:hidden w-36 h-36">
          <Image src={book} />
        </div>
        <div className="flex flex-col w-3/4">
          <p className="font-header text-2xl md:text-4xl !text-center lg:!text-start -mb-2">
            Become a Volunteer
          </p>
          <HorizontalLine />
          <p className="font-paragraph text-lg md:text-xl !text-center lg:!text-start mt-2">
            Are you confident in your coding skills? Apply to become a mentor
            and help future innovators make a difference!
          </p>
          <div className="flex justify-center lg:justify-end md:mt-0 mt-4">
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
