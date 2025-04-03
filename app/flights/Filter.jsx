"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Plane } from "lucide-react";
import Image from "next/image";
import planeIcon from "@/public/airplane-icon.svg";
import { formatCurr } from "../_lib/utils";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";

const transitOptions = [
  { label: "Direct Flight", value: "direct" },
  { label: "1 Transit", value: "1-transit" },
  { label: "2+ Transit", value: "2+Transit" },
];

export default function Filter({
  minimumAmount = "",
  maximumAmount = "",
  test,
}) {
  const router = useRouter();
  const [amenities, setAmenities] = useState([]);
  const [flightType, setFlightType] = useState("");
  const [price, setPrice] = useState(999);
  const amenitiesList =
    test?.data?.itineraryGroupDetail.at(0).itinerariesList[0]?.amenities1[0]
      ?.scheduleDetail[0]?.segments[0]?.amenitiesList;

  const handleCheckboxChange = (value) => {
    setAmenities((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const updateURL = (newItems) => {
    const params = new URLSearchParams();

    // Append each item as a separate query parameter
    const totalAmenitiesToFilter = amenities.map((item) => item.key).join("-");
    params.append("amenities", totalAmenitiesToFilter);
    params.append("flightType", flightType);
    params.append("priceRange", price);

    // Update the URL
    router.push(`/flights?${params.toString()}`);
  };

  console.log("Amenities list:", amenitiesList);

  return (
    <div className="space-y-8 ">
      <div>
        <p className="font-normal text-sm text-gray col-span-2 mb-3">
          No. Transit
        </p>
        <RadioGroup
          defaultValue="direct"
          onValueChange={(value) => setFlightType(value)}
        >
          {transitOptions.map((option, index) => (
            <div
              className="flex items-center space-x-2 font-normal text-sm text-gray"
              key={index}
            >
              <RadioGroupItem value={option.value} id={option.value} />
              <Label
                htmlFor={option.value}
                className="w-full font-normal text-sm text-gray"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      <div>
        <div>
          <p className="font-normal text-sm text-gray mb-2">Pricing</p>
          <div className="flex items-center gap-2 mb-8">
            <div className="flex-1 text-center p-3 bg-[#F7FAFA] rounded-lg">
              {formatCurr(minimumAmount, "SAR", "en-US")}
            </div>
            <div>&mdash;</div>
            <div className="flex-1 text-center p-3 bg-[#F7FAFA] rounded-lg">
              {formatCurr(maximumAmount, "SAR", "en-US")}
            </div>
          </div>
        </div>
        <div className="relative pt-6 pb-10">
          <Slider
            defaultValue={[1]}
            min={minimumAmount}
            max={maximumAmount}
            step={1}
            value={[price]}
            onValueChange={(value) => setPrice(value[0])}
            className="w-full "
          />

          <div
            className="absolute top-[9px] pointer-events-none min-w-max"
            style={{
              left: `${100}%`,
              transform: "translateX(-50%)",
            }}
          >
            <Image src={planeIcon} />
            <span className="font-medium absolute top-full -left-[10px] backdrop-blur-md">
              {formatCurr(price, "SAR", "en-US")}
            </span>
          </div>

          <div className="flex justify-between mt-2">
            <span className="font-medium">
              {formatCurr(parseInt(minimumAmount), "SAR", "en-US")}
            </span>
          </div>
        </div>
      </div>
      <div>
        {amenitiesList.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <Checkbox
              id={item}
              checked={amenities.some((amenity) => amenity.key === item.key)}
              onCheckedChange={() => handleCheckboxChange(item)}
            />
            <Label htmlFor={item} className="font-normal text-sm text-gray">
              {`${item.key}`.replace(item.key[0], item.key[0].toUpperCase())}
            </Label>
          </div>
        ))}
      </div>
      <Button
        className={`bg-[#fccd27] text-black hover:bg-[#e9bd24]  rounded-lg font-medium h-auto w-full`}
        onClick={updateURL}
      >
        Apply
      </Button>
    </div>
  );
}
