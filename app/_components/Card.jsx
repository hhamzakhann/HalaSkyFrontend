import React from "react";

export default function Card({ varient, className, children }) {
  const baseClasses = "bg-white rounded-xl shadow-sm border border-slate-200 ";

  const varientStyle = {
    large: baseClasses + "px-6 py-5",
  };

  return (
    <div className={`${varientStyle[varient]} ${className}`}>{children}</div>
  );
}
