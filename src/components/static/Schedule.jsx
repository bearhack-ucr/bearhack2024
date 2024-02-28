"use client";
import { useState, useEffect } from "react";

const Schedule = () => {
  const DAYS = [3, 4, 5, 6, 0];
  const DAY_NAME = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [selectedDay, setSelectedDay] = useState(0);
  // updates selected day based on current date (if applicable)
  // this runs in an effect so there aren't unexpected hydration errors
  useEffect(() => {
    const today = new Date().getDay();
    if (DAYS.includes(today)) {
      setSelectedDay(today);
    }
  }, []);

  const PLACEHOLDER_EVENTS = [...new Array(10)].map(() => ({
    time: "9:00AM",
    name: "Opening Ceremony",
    description:
      "Lorem ipsum flex flex-col items-center justify-center text-white gap-8 pb-24 text-sm lg:text-base font-header text-4xl lg:text-5xl border-white bg-gradient-to-r from-bear-page-gradient-1 to-bear-page-gradient-2 rounded-lg",
    type: "WORKSHOP",
    location: "WCH 502",
  }));

  return (
    <div className="flex flex-col items-center justify-center text-white gap-8 pb-24 text-sm lg:text-base">
      <div className="font-header text-4xl lg:text-5xl">Schedule</div>
      Pacific Standard Time (PST)
      <div className="flex flex-row gap-0 lg:gap-2 border border-white bg-gradient-to-r from-bear-page-gradient-1 to-bear-page-gradient-2 rounded-full">
        {DAYS.map((day, index) => (
          <div
            className={`px-2 lg:px-8 py-2 rounded-full transition-colors ${
              selectedDay === day ? "bg-white/30" : "hover:bg-white/10"
            }`}
            key={index}
            onClick={() => setSelectedDay(day)}
          >
            {DAY_NAME[day]}
          </div>
        ))}
      </div>
      <div className="w-11/12 lg:w-3/4 flex flex-col items-center p-4 gap-4 border border-white bg-gradient-to-r from-bear-page-gradient-1 to-bear-page-gradient-2 rounded-lg">
        {PLACEHOLDER_EVENTS.map(
          ({ time, name, description, type, location }, index) => (
            <>
              {index > 0 && (
                <div className="w-3/4 h-px bg-white" key={-index}></div>
              )}
              <div
                className="grid grid-cols-8 items-center content-center text-center"
                key={index}
              >
                <div className="col-span-2 md:col-span-1 font-bold rounded-full m-auto w-3/4 py-2 bg-white/10">
                  {time}
                </div>
                <div className="text-normal lg:text-lg col-span-2 font-bold">
                  {name}
                  <div className="block md:hidden">@ {location}</div>
                  <div className="font-normal">{type}</div>
                </div>
                <div className="col-span-4 md:col-span-3">{description}</div>
                <div className="hidden md:block font-bold">{type}</div>
                <div className="hidden md:block font-bold">{location}</div>
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
};

export default Schedule;
