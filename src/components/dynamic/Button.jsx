import { COLORS, SIZES } from "@/data/dynamic/Button";

const Button = ({ onClick, text, loading, color, size }) => {
  return (
    <button
      disabled={loading}
      data-cy={`${text}-button`}
      className={`${loading ? COLORS["gray"].bg : COLORS[color].bg} ${
        loading ? COLORS["gray"].text : COLORS[color].text
      } ${SIZES[size]} ${
        COLORS[color].border
      } py-1 font-bold px-12 rounded-full m-3 !bg-transparent !text-white border hover:!bg-bear-purple/50 transition-colors`}
      onClick={onClick}
    >
      {loading ? "Loading..." : text}
    </button>
  );
};

export default Button;
