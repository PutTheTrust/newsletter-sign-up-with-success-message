"use client";

import clsx from "clsx";

// import { useState } from "react";

interface InputProps {
  placeholder: string;
  label: string;
  type: string;
  id: string;
  text: string;
  setText: Function;
  error: boolean;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  label,
  type,
  id,
  text,
  setText,
  error,
}) => {
  return (
    <>
      <div className="flex justify-between items-end">
        <label htmlFor={id} className="text-xs font-bold">
          {label}
        </label>
        {!error && (
          <span className="text-xs text-red-500 font-bold">
            Valid email required
          </span>
        )}
      </div>
      <input
        className={clsx(
          "w-full h-14 px-6 border-2 rounded-md mt-[13px] mb-6",
          !error && "border-tomato text-tomato bg-tomato/20"
        )}
        type={type}
        placeholder={placeholder}
        id={id}
        name={id}
        value={text}
        required
        onChange={(e) => {
          setText(e.target.value);
          console.log(e.target.value);
        }}
      />
    </>
  );
};

export default Input;
