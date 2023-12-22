import { BsCheckLg } from "react-icons/bs";

const Checkbox = ({ toggle, onClick = () => {}, text = "", color }) => {
  return (
    <div
      className="flex items-center hover:cursor-pointer w-fit"
      onClick={onClick}
      data-cy="checkbox"
    >
      <div
        data-cy="checkbox-bg"
        className={`w-4 h-4 rounded-sm border border-white ${
          toggle ? `${color ? color : "bg-transparent"}` : "bg-transparent"
        } flex items-center justify-center`}
      >
        <BsCheckLg
          data-cy="checkmark"
          className={`${toggle ? "text-white" : "text-transparent"} text-lg`}
        />
      </div>
      {text && <p className="pl-3 my-0 pt-0">{text}</p>}
    </div>
  );
};

export default Checkbox;
