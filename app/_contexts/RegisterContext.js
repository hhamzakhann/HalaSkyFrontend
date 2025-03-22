"use client";
import { createContext, useContext, useState } from "react";

const RegisterContext = createContext();

const RegisterProvider = function ({ children }) {
  const [userEmailToRegister, setUserEmailToRegister] = useState("");

  return (
    <RegisterContext.Provider
      value={{ userEmailToRegister, setUserEmailToRegister }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

const useRegister = function () {
  const context = useContext(RegisterContext);

  if (context === undefined)
    throw new Error("Register context used outside the Provider");

  return context;
};

export { useRegister, RegisterProvider };
