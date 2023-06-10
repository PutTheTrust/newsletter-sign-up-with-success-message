import React from "react";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="text-white h-14 rounded-md font-bold bg-slate-500 w-full">
      {text}
    </button>
  );
};

export default Button;
