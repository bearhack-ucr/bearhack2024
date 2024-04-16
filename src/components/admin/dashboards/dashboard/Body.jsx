import { flexRender } from "@tanstack/react-table";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const Body = ({ getIsSelected, getVisibleCells, Dropdown, original }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <div
        className={`flex px-3 py-2 border-b-[1px] border-hackathon-gray-200 items-center ${
          getIsSelected() ? "bg-bear-teal/50" : "bg-bear-teal/10"
        }`}
        data-cy={original.uid}
      >
        {getVisibleCells().map(({ id, column, getContext }) => (
          <div
            className={`flex items-center ${column.columnDef.width} text-white`}
            key={id}
          >
            {flexRender(column.columnDef.cell, getContext())}
          </div>
        ))}
        {Dropdown && (
          <FaChevronDown
            className={`${
              dropdown && "rotate-180"
            } duration-300 hover:cursor-pointer text-white`}
            onClick={() => setDropdown(!dropdown)}
          />
        )}
      </div>
      {dropdown && <Dropdown object={original} />}
    </>
  );
};

export default Body;