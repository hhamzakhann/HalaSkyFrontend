"use client";

import { createContext, useContext, useState } from "react";

const ForgotPasswordContext = createContext();

const ForgotPasswordProvider = function ({ children }) {
  const [email, setEmail] = useState("");

  return (
    <ForgotPasswordContext.Provider value={{ email, setEmail }}>
      {children}
    </ForgotPasswordContext.Provider>
  );
};

const useForgotPassword = function () {
  const context = useContext(ForgotPasswordContext);
  if (context === undefined)
    throw new Error("Forgot Password context was called outside provider");

  return context;
};

export { ForgotPasswordProvider, useForgotPassword };
