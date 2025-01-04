import Navigation from "@/app/_components/Navigation";
import Image from "next/image";
import ButtonCustom from "../_components/Button";

import Card from "../_components/Card";
import Container from "../_components/Container";

import {
  FlightDetailCard,
  FlightFilter,
  FlightSearchList,
} from "../_features/flight";

import FromToIcon from "@/public/fromTo-icon.svg";

export const metadata = {
  title: "Flight",
};

export default function Page() {
  return (
    <div className="bg-[#F7FAFA] min-h-[100vh]">
      <div className="border-b border-slate-200">
        <Navigation varient="main-nav" />
      </div>
      <div className="border-b border-slate-200">
        <Container className=" !p-0">
          <div className="grid grid-cols-[1fr_1fr]  md:grid-cols-[1fr_1fr_1fr_2fr_2fr_auto]">
            <div className="search-flight-item px-3 py-2 md:px-4 md:py-3 space-y-2">
              <div className="flex items-center gap-1">
                <img src="/select.svg" />
                <span className="font-normal text-xs">Select Trip</span>
              </div>
              <div className="flex items-center gap-1">
                <select className="w-full focus:outline-none bg-transparent">
                  <option>option 1</option>
                  <option>option 2</option>
                </select>
              </div>
            </div>
            <div className="search-flight-item px-3 py-2 md:px-4 md:py-3 space-y-2 flight-from">
              <div className="flex items-center gap-1">
                <img src="/airplane.svg" />
                <span className="font-normal text-xs">From</span>
              </div>
              <div className="flex items-center gap-1">
                <span>Jakarta</span>
              </div>
              <div className="fromToIcon-container">
                <Image src={FromToIcon} />
              </div>
            </div>
            <div className="search-flight-item px-3 py-2 md:px-7 md:py-3 space-y-2">
              <div className="flex items-center gap-1">
                <img src="/landing-airplane-icon.svg" />
                <span className="font-normal text-xs">To</span>
              </div>
              <div className="flex items-center gap-1">
                <span>Hanoi</span>
              </div>
            </div>
            <div className="search-flight-item px-3 py-2 md:px-4 md:py-3 space-y-2">
              <div className="flex items-center gap-1">
                <img src="/calender-icon.svg" />
                <span className="font-normal text-xs">Flight Date</span>
              </div>
              <div className="flex items-center gap-1">
                <span>Fri, 29 Aug 2024 - Fri, 29 Aug 2024</span>
              </div>
            </div>
            <div className="search-flight-item px-3 py-2 md:px-4 md:py-3 space-y-2">
              <div className="flex items-center gap-1">
                <img src="/seat-icon.svg" />
                <span className="font-normal text-xs">
                  Passenger & Cabin Class
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span>1 Passenger, Economy</span>
              </div>
            </div>
            <div className="search-flight-item  px-3 py-2">
              <div className="bg-accent w-fit p-3 rounded-full">
                <img src="/search-white-icon.svg" />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container className="!p-0">
        <section className="p-0 md:px-4 md:py-3 relative">
          <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-10">
            <div className="space-y-6">
              <div>
                <ButtonCustom
                  className="w-full mb-3"
                  varient="accent"
                  shape="round"
                  size="large"
                >
                  <span>Set Alert</span>
                  <img src="/ring.svg" />
                </ButtonCustom>
                <Card varient="large" className="absolute top-0 md:static">
                  <p className="font-normal text-xs text-gray">
                    Select Airline
                  </p>
                </Card>
              </div>
              <FlightFilter />
            </div>
            <div>
              <FlightSearchList />
              <p className="mb-4 text-sm font-medium text-slate-400">
                24 Result Found
              </p>
              <FlightDetailCard />
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
