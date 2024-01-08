const Title = ({ title }) => {
  return (
    <div
      data-cy={`${title}-title`}
      className="text-2xl text-white font-extrabold pr-5 hidden lg:block"
    >
      {title}
    </div>
  );
};

export default Title;
