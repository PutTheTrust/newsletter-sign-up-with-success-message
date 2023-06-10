import React, { MouseEventHandler } from "react";

interface ButtonProps {
  text: string;
  // onClick: MouseEventHandler<HTMLButtonElement>;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-white h-14 rounded-md font-bold bg-dark-slate-grey hover:bg-tomato hover:shadow-lg shadow-tomato transition  w-full"
    >
      {text}
    </button>
  );
};

export default Button;
