"use client";

import { useState } from "react";
import RadioGroup from "../../_components/formControls/RadioGroup";

const flightFacilityOptions = [
  { label: "Extra Luggage", value: 1 },
  { label: "In Flight Meal", value: 2 },
  { label: "In Flight Entertainment", value: 3 },
  { label: "Wifi", value: 4 },
  { label: "USB Mode", value: 5 },
];

export default function FlightFacilitiesList() {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <p className="font-normal text-sm text-gray mb-3">Facility</p>
      <RadioGroup
        options={flightFacilityOptions}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
