import React from "react";

export default function Badge({ variant, className, children }) {
  const base = "px-4 py-2 inline-flex items-center rounded-full ";

  const styleVariant = {
    primary: base + "bg-blueDark2 text-white font-medium text-xs",
  };
  return (
    <span className={`${styleVariant[variant]} ${className}`}>{children}</span>
  );
}
