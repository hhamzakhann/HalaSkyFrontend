"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Plane } from "lucide-react";
import Image from "next/image";
import planeIcon from "@/public/airplane-icon.svg";

const flightFacilityOptions = [
  { label: "Extra Luggage", value: 1 },
  { label: "In Flight Meal", value: 2 },
  { label: "In Flight Entertainment", value: 3 },
  { label: "Wifi", value: 4 },
  { label: "USB Mode", value: 5 },
];

const transitOptions = [
  { label: "Direct Flight", value: 1 },
  { label: "1 Transit", value: 2 },
  { label: "2+ Transit", value: 3 },
];

export default function Filter() {
  const [price, setPrice] = useState(999);
  return (
    <div className="space-y-8 ">
      <div>
        <p className="font-normal text-sm text-gray col-span-2 mb-3">
          No. Transit
        </p>
        <RadioGroup defaultValue="comfortable">
          {transitOptions.map((option) => (
            <div className="flex items-center space-x-2 font-normal text-sm text-gray">
              <RadioGroupItem value={option.value} id={option.value} />
              <Label
                htmlFor={option.value}
                className="w-full font-normal text-sm text-gray"
              >
                {option.label}
              </Label>
              <span className="font-normal text-sm text-gray w-full text-end">
                $49.99
              </span>
            </div>
          ))}
        </RadioGroup>
      </div>
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
        <div className="relative pt-6 pb-10">
          <Slider
            defaultValue={[1]}
            min={1}
            max={100}
            step={1}
            value={[price]}
            onValueChange={(value) => setPrice(value[0])}
            className="w-full "
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
        </div>
      </div>
      <div>
        <RadioGroup defaultValue="comfortable">
          {flightFacilityOptions.map((option) => (
            <div className="flex items-center space-x-2">
              <RadioGroupItem value={option.value} id={option.value} />
              <Label
                className="font-normal text-sm text-gray"
                htmlFor={option.value}
              >
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}
