"use client";

import { Slider } from "@/components/ui/slider";
import Image from "next/image";
import { useState } from "react";
import planeIcon from "@/public/airplane-icon.svg";
import { cn } from "@/lib/utils";
import { Plane } from "lucide-react";
import { useEffect } from "react";

export default function PricingFilter({
  price,
  setPrice,
  className,
  min = 100,
  max = 8000,
  defaultValue = [4, 20],
}) {
  // const [value, setValue] = useState([20, 80]);

  let maxValuePercentage = ((price[1] - min) / (max - min)) * 100;

  return (
    <div>
      <div>
        <p className="font-normal text-sm text-gray mb-2">Pricing</p>
        <div className="flex items-center gap-2 mb-8">
          <div className="flex-1 text-center p-3 bg-[#F7FAFA] rounded-lg">
            $1
          </div>
          <div>&mdash;</div>
          <div className="flex-1 text-center p-3 bg-[#F7FAFA] rounded-lg">
            ${price}
          </div>
        </div>
      </div>
      {/* <div className="relative pt-6 pb-10">
        <Slider
          defaultValue={[1, 5]}
          min={1}
          max={100}
          step={1}
          // value={[price]}
          // onValueChange={(value) => setPrice(value[0])}
          onValueChange={(values) => {

            setPrice(values);
          }}
          className={cn("w-[100%]", className)}
        />

        <div
          className="absolute top-[9px] pointer-events-none min-w-max"
          style={{
            left: `${price}%`,
            transform: "translateX(-50%)",
          }}
        >
          <Image src={planeIcon} />
          <span className="font-medium absolute top-full -left-[10px] backdrop-blur-md">
            ${price}
          </span>
        </div>

        <div className="flex justify-between mt-2">
          <span className="font-medium">$1</span>
        </div>
      </div> */}

      <div className="space-y-4 mt-24 px-4">
        <div className="relative w-full">
          {/* The slider component */}
          <Slider
            defaultValue={defaultValue}
            min={min}
            max={max}
            step={1}
            className={cn("", className)}
            onValueChange={(values) => setPrice(values)}
          />

          <div
            className="absolute top-[15px] transform -translate-y-1/2 "
            style={{
              left: `calc(${maxValuePercentage}% - 30px)`,
              pointerEvents: "none",
            }}
          >
            <div className="p-1 min-w-max">
              <Image src={planeIcon} />
              <div>${price[1]}</div>
            </div>
          </div>
        </div>

        <div className="flex justify-between text-sm w-full mt-2">
          <div>${price[0]}</div>
        </div>
      </div>
    </div>
  );
}
