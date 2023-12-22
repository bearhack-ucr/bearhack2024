import React from "react";

const Error = ({ code, error, message, dev }) => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center fixed bg-bear-dark">
      <p className="text-center text-9xl font-header font-extrabold text-bear-teal m-0">
        {code}
      </p>
      <p className="text-center text-lg md:text-2xl font-bold font-header text-bear-teal m-4">
        {error}
      </p>
      <p className="text-center text-sm md:text-lg  text-bear-teal m-0">
        {message}
      </p>
      <p className="text-center text-sm md:text-lg text-hackathon-blue-200 m-0">
        Developer Notes: {dev}
      </p>
    </div>
  );
};

export default Error;
