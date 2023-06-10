"use client";

import { createContext, useContext, useState } from "react";

const EmailContext = createContext({});

export const EmailContextProvider = ({ children }: any) => {
  const [email, setEmail] = useState("");

  return (
    <EmailContext.Provider value={{ email, setEmail }}>
      {children}
    </EmailContext.Provider>
  );
};

export const useEmailContext = () => useContext(EmailContext);
