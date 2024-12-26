"use client";

import { Button } from "antd";

export default function LinkButton({ children, onClick, className = "" }) {
  const classes = "text-slate-900 font-light text-sm border-b border-b-inherit";
  //   if (onClick) CHANGE LATER
  return (
    <Button type="link" onClick={onClick} className={`${classes} ${className}`}>
      <span className="border-b border-slate-900 ">{children}</span>
    </Button>
  );
}
