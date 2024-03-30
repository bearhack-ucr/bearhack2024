"use client";
import { useState } from "react";

const Events = ({ events, totalDays }) => {
  const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [selectedDay, setSelectedDay] = useState(
    new Date() > events[0].start ? new Date().getDay() : 1
  );

  return (
    <div className="flex flex-col items-center justify-center text-white gap-8 pb-24 text-sm lg:text-base">
      <div className="font-header text-4xl lg:text-5xl">Schedule</div>
      Pacific Standard Time (PST)
      <div className="flex flex-row gap-0 lg:gap-2 border border-white bg-gradient-to-r from-bear-page-gradient-1 to-bear-page-gradient-2 rounded-full">
        {totalDays.map((day, index) => (
          <div
            className={`px-2 lg:px-8 py-2 rounded-full transition-colors ${
              selectedDay === day ? "bg-white/30" : "hover:bg-white/10"
            }`}
            key={index}
            onClick={() => setSelectedDay(day)}
          >
            {DAYS[day]}
          </div>
        ))}
      </div>
      <div className="mt-8 w-11/12 lg:w-3/4 grid grid-cols-8 px-4 items-center content-center text-center font-base">
        <div className="col-span-2 md:col-span-1">Time</div>
        <div className="col-span-2">Event</div>
        <div className="col-span-4 md:col-span-3">Details</div>
        <div className="hidden md:block">Type</div>
        <div className="hidden md:block">Location</div>
      </div>
      <div className="w-11/12 lg:w-3/4 flex flex-col items-center p-4 gap-4 border border-white bg-gradient-to-r from-bear-page-gradient-1 to-bear-page-gradient-2 rounded-lg">
        {events
          .filter(({ start }) => start.getDay() === selectedDay)
          .map(({ start, summary, description, type, location }, index) => (
            <div key={index} className="w-full">
              {index > 0 && <div className="w-3/4 h-px bg-white" />}
              <div className="grid grid-cols-8 items-center content-center text-center">
                <div className="col-span-2 md:col-span-1 font-bold rounded-full m-auto w-3/4 py-2 bg-white/10">
                  {start.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
                <div className="text-normal lg:text-lg col-span-2 font-bold">
                  {summary}
                  <div className="block md:hidden">@ {location}</div>
                  <div className="block md:hidden font-normal">{type}</div>
                </div>
                <div className="col-span-4 md:col-span-3 px-4">
                  {description.split("\n")[1]}
                </div>
                <div className="hidden md:block font-bold">
                  {description.split("\n")[0].substr(1)}
                </div>
                <div className="hidden md:block font-bold">{location}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Events;
