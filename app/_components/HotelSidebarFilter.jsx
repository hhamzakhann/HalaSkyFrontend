"use client";

import SidebarFilter from "../_features/flight/SidebarFilter";
import StarRating from "../_components/StarRating";
import PricingFilter from "../_components/PricingFilter";
import HotelServiceList from "../_features/hotels/HotelServiceList";
import { useState } from "react";
import ButtonCustom from "./Button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function HotelSidebarFilter() {
  const [rating, setRating] = useState(0);
  const [price, setPrice] = useState([0, 0]);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const handleFilter = function () {
    const params = new URLSearchParams(searchParams);
    params.set("rating", rating);
    params.set("minPrice", price[0]);
    params.set("maxPrice", price[1]);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  };

  return (
    <SidebarFilter className="">
      <StarRating
        size={20}
        label="Rating"
        labelClass="font-medium text-xs text-gray mb-2"
        onSetRating={setRating}
      />
      <PricingFilter price={price} setPrice={setPrice} defaultValue={[4, 20]} />
      {/* <HotelServiceList /> */}
      <ButtonCustom type="accent" onClick={handleFilter}>
        Apply Now
      </ButtonCustom>
    </SidebarFilter>
  );
}
