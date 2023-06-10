"use client";

import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Form = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorStatus = emailPattern.test(text);
    setError(errorStatus);
    console.log(errorStatus);
  };

  return (
    <div>
      <Input
        placeholder="email@company.com"
        label="Email address"
        type="text"
        id="email"
        setText={setText}
        text={text}
        error={error}
      />

      <Button onClick={validateEmail} text="Subscribe to monthly newsletter" />
    </div>
  );
};

export default Form;
