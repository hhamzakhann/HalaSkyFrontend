"use client";

import ButtonCustom from "@/app/_components/Button";
import { useState } from "react";
import { OverviewTab } from "./overviewtab";
import { FacilitiesTab } from "./facilitiesTab";
import { ReviewTab } from "./reviewTab";

export const TabsContainer = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <>
      <div className="flex items-center gap-2">
        <ButtonCustom
          type={selectedTab === 1 ? "" : "outlined"}
          variant={selectedTab === 1 ? "" : "roundedWhite"}
          className={`rounded-3xl shadow-lg hover:bg-[#06203B] hover:text-white ${
            selectedTab === 1
              ? "text-white bg-[#06203B]"
              : "text-[#05203B] border-[#05203B] border-2"
          }`}
          onClick={() => setSelectedTab(1)}
        >
          Overview
        </ButtonCustom>
        <ButtonCustom
          type={selectedTab === 2 ? "" : "outlined"}
          variant={selectedTab === 2 ? "" : "roundedWhite"}
          className={`rounded-3xl shadow-lg hover:bg-[#06203B] hover:text-white ${
            selectedTab === 2
              ? "text-white bg-[#06203B]"
              : "text-[#05203B] border-[#05203B] border-2"
          }`}
          onClick={() => setSelectedTab(2)}
        >
          Room Facilities
        </ButtonCustom>
        <ButtonCustom
          type={selectedTab === 3 ? "" : "outlined"}
          variant={selectedTab === 3 ? "" : "roundedWhite"}
          className={`rounded-3xl shadow-lg hover:bg-[#06203B] hover:text-white ${
            selectedTab === 3
              ? "text-white bg-[#06203B]"
              : "text-[#05203B] border-[#05203B] border-2"
          }`}
          onClick={() => setSelectedTab(3)}
        >
          Reviews
        </ButtonCustom>
      </div>
      <div className="tabContent">
        <OverviewTab selectedTab={selectedTab} />
        <FacilitiesTab selectedTab={selectedTab} />
        <ReviewTab selectedTab={selectedTab} />
      </div>
    </>
  );
};
