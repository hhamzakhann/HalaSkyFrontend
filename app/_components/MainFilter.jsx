"use client";

import { useState } from "react";
import { spartanFont } from "../font";
import FlightFilter from "./FlightFilter";
import HotelFilter from "./HotelFilter";
import FilterImage from "@/public/mainBannerImage.png";
import Image from "next/image";

export default function MainFilter() {
  const [activeTab, setActiveTab] = useState("flight");
  return (
    <>
      <div className=" mx-auto p-6 bg-white rounded-lg relative md:mt-40">
        <Image
          src={FilterImage}
          fill
          className="md:!h-[62%] lg:!h-[500px] !w-auto md:!-top-[53%] lg:!-top-[450px] !left-[42%] hidden md:block"
        />
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <h1
            className={`text-2xl sm:text-4xl font-normal mb-6 ${spartanFont.className}`}
          >
            Explore your journey
          </h1>

          {/* Tabs */}

          <div className="flex rounded-full overflow-hidden mb-10">
            <button
              onClick={() => setActiveTab("flight")}
              className={`px-6 py-2 rounded-full ${
                activeTab === "flight"
                  ? "bg-[#172b85] text-white "
                  : "bg-white text-black"
              }`}
            >
              Flight
            </button>
            <button
              onClick={() => setActiveTab("hotels")}
              className={`px-6 py-2 rounded-full ${
                activeTab === "hotels"
                  ? "bg-[#172b85] text-white"
                  : "bg-white text-black"
              }`}
            >
              Hotels
            </button>
          </div>
        </div>
        {activeTab === "flight" ? <FlightFilter /> : <HotelFilter />}
      </div>
    </>
  );
}
