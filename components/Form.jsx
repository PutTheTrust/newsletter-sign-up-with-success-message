"use client";

import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { useEmailContext } from "@/context/context";

function Form() {
  const [text, setText] = useState("");
  const [error, setError] = useState(true);
  const { setEmail } = useEmailContext();
  const router = useRouter();

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorStatus = emailPattern.test(text);
    setError(errorStatus);
    setEmail(text);
    // console.log(errorStatus);
    if (errorStatus) {
      router.push("/confirmation");
    }
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
}

export default Form;
