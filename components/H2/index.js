import clsx from "clsx";

const H2 = ({ coloredText, text, className }) => {
  return (
    <h2 className={clsx("text-lg font-semibold text-gray-200", className)}>
      <span className="text-red-light mr-1">{coloredText}</span>
      {text}
    </h2>
  );
};

export default H2;
