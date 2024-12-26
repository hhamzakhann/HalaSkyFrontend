"use client";

import { useState } from "react";

export default function PricingFilter() {
  // const [value, setValue] = useState([20, 80]);

  // const handleChange = function (e) {
  //   console.log(e);
  // };

  return (
    <div>
      <p className="font-normal text-sm text-gray mb-2">Pricing</p>
      <div className="flex items-center gap-2 mb-8">
        <div className="flex-1 text-center p-3 bg-[#F7FAFA] rounded-lg">$0</div>
        <div>&mdash;</div>
        <div className="flex-1 text-center p-3 bg-[#F7FAFA] rounded-lg">
          $10
        </div>
      </div>
      {/* <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      /> */}
    </div>
  );
}
