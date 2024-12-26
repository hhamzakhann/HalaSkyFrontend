"use client";
import React, { useState } from "react";
import { Radio, Space } from "antd";
import RadioGroup from "./formControls/RadioGroup";

const transitOptions = [
  { label: "Direct Flight", value: 1 },
  { label: "1 Transit", value: 2 },
  { label: "2+ Transit", value: 3 },
];

export default function TransitList() {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("value", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className="grid grid-cols-[1fr_auto]">
      <p className="font-normal text-sm text-gray col-span-2 mb-3">
        No. Transit
      </p>
      {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>*/}
      <RadioGroup options={transitOptions} value={value} onChange={onChange} />

      <div className="flex flex-col justify-between">
        <span className="font-normal text-sm text-gray">$49.99</span>
        <span className="font-normal text-sm text-gray">$49.99</span>
        <span className="font-normal text-sm text-gray">$49.99</span>
      </div>
    </div>
  );
}
