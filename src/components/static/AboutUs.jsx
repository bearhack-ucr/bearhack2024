import React from "react";
import Frame from "@/public/frame.svg";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="w-full h-screen md:h-full text-white bg-black flex flex-col justify-center items-center">
      <div className="grid grid-cols-2 w-full h-full md:w-1/2 mt-16">
        <Image
          src={Frame}
          alt={"frame"}
          className="hidden lg:block lg:scale-75 rotate-0"
        />
        <div className="flex justify-end items-start">
          <Image
            src={Frame}
            alt={"frame"}
            className="hidden lg:block md:scale-75 rotate-90"
          />
        </div>
      </div>

      <div className="flex flex-col w-5/6 lg:w-4/12 items-center gap-8 -my-24">
        <p className="font-header text-xl md:text-5xl flex justify-center !text-center lg:!text-center -mb-1">
          About Us
        </p>
        <div className="h-0.5 w-11/12 bg-gray-300 rounded-full" />
        <p className="font-paragraph text-sm md:text-xl text-center mt-1">
          Welcome to Bearhack, a medical-technology-focused, in-person,
          weekend-long event brought to you by BMES (Biomedical Engineering
          Society). Bearhack invites curious minds to embark on a journey of
          learning and innovation. This event provides a unique opportunity for
          participants to choose a project of their liking and dedicate the
          weekend to exploring and building something new. Whether you&apos;re
          passionate about a specific medical technology or have been meaning to
          delve into a particular topic, Bearhack is the perfect platform for
          you. Form a team of up to 4 people to collaborate and create. The
          event not only fosters individual growth but also offers the chance to
          forge new friendships with fellow enthusiasts.
        </p>
      </div>
      <div className="grid grid-cols-2 w-full h-full md:w-1/2 2xl:w-1/2 -mt-3 mb-16">
        <Image
          src={Frame}
          alt={"frame"}
          className="hidden lg:block md:scale-75 -rotate-90"
        />
        <div className="flex justify-end items-start">
          <Image
            src={Frame}
            alt={"frame"}
            className="hidden lg:block md:scale-75 rotate-180"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
