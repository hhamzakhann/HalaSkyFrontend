"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { ArrowRight, ChevronsUpDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import calenderIcon from "@/public/calender-icon.svg";
import planFlight from "@/public/planFlight.svg";
import usersIcon from "@/public/users-icons.svg";
import Locations from "./formControls/Locations";

const today = new Date();
const initialCheckoutDate = today.setDate(today.getDate() + 1);

export default function HotelFilter() {
  const [location, setLocation] = useState();
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(
    new Date(initialCheckoutDate)
  );
  const [checkInOpen, setCheckInOpen] = useState(false);
  const [checkOutOpen, setCheckOutOpen] = useState(false);
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(2);

  console.log("CONFIRMING LOCATION:", location);

  return (
    <>
      {/* Search Form */}
      <div className="grid grid-cols-1  sm:grid-cols-3 lg:grid-cols-11 gap-4 mb-4 items-end">
        {/* Location */}
        <div className="col-span-1 lg:col-span-2">
          <div className="text-sm mb-1 text-blueDark">Location</div>
          <div className="bg-[#f2f4f5] rounded-lg p-4 col-span-2 border">
            <Locations
              endpoint="/hotel/locations"
              icon={<Image src={planFlight} className="w-4 h-4" />}
              onLocationSelect={(loc) => setLocation(loc)}
            />
          </div>
        </div>

        {/* Check In */}
        <div className="col-span-1 lg:col-span-2">
          <div className="text-sm text-blueDark mb-1">Check In</div>
          <div className="bg-[#f2f4f5] rounded-lg p-4 border">
            <Popover open={checkInOpen} onOpenChange={setCheckInOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-between border-0 bg-transparent hover:bg-transparent hover:text-black p-0 shadow-none"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-blueDark">
                      <Image src={calenderIcon} className="w-4 h-4 " />
                    </div>
                    <div>
                      <div className="font-medium text-left">
                        {checkInDate
                          ? format(checkInDate, "EEE, dd MMM")
                          : "Select date"}
                      </div>
                      <div className="text-xs font-light text-[#808080] text-left">
                        {checkInDate ? format(checkInDate, "yyyy") : ""}
                      </div>
                    </div>
                  </div>
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={checkInDate}
                  onSelect={(date) => {
                    setCheckInDate(date);
                    setCheckInOpen(false);
                  }}
                  initialFocus
                  disabled={(date) => (date < new Date() ? date : false)}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Check Out */}
        <div className="col-span-1 lg:col-span-2">
          <div className="text-sm text-blueDark mb-1">Check Out</div>
          <div className="bg-[#f2f4f5] rounded-lg p-4 border">
            <Popover open={checkOutOpen} onOpenChange={setCheckOutOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-between border-0 bg-transparent hover:bg-transparent hover:text-black p-0 shadow-none"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-blueDark">
                      <Image src={calenderIcon} className="w-4 h-4 " />
                    </div>
                    <div>
                      <div className="font-medium text-left">
                        {checkOutDate
                          ? format(checkOutDate, "EEE, dd MMM")
                          : "Select date"}
                      </div>
                      <div className="text-xs font-light text-[#808080] text-left">
                        {checkOutDate ? format(checkOutDate, "yyyy") : ""}
                      </div>
                    </div>
                  </div>
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={checkOutDate}
                  onSelect={(date) => {
                    setCheckOutDate(date);
                    setCheckOutOpen(false);
                  }}
                  initialFocus
                  disabled={(date) =>
                    checkInDate ? date < checkInDate : false
                  }
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Guests */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3">
          <div className="text-sm text-blueDark mb-1">Guests</div>
          <div className="bg-[#f2f4f5] rounded-lg p-4 border">
            <Popover open={guestsOpen} onOpenChange={setGuestsOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-between border-0 bg-transparent hover:bg-transparent hover:text-black p-0 shadow-none"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-blueDark">
                      <Image src={usersIcon} className="w-4 h-4 " />
                    </div>
                    <div className="font-medium text-left">
                      {adults} {adults === 1 ? "Adult" : "Adults"}, {children}{" "}
                      {children === 1 ? "Child" : "Children"}
                    </div>
                  </div>
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[240px] p-4">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-medium">Adults</label>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => setAdults(Math.max(1, adults - 1))}
                        >
                          -
                        </Button>
                        <span className="w-8 text-center">{adults}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => setAdults(adults + 1)}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">Children</label>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => setChildren(Math.max(0, children - 1))}
                        >
                          -
                        </Button>
                        <span className="w-8 text-center">{children}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => setChildren(children + 1)}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="w-full"
                    onClick={() => setGuestsOpen(false)}
                  >
                    Apply
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <Link
          className={`bg-[#fccd27] text-black hover:bg-[#e9bd24] px-8 py-6 rounded-lg font-medium h-auto col-span-1 lg:col-span-2 block ${buttonVariants(
            { variant: "accent" }
          )}`}
          // onClick={handleSearch}
          href={`/hotels?cityCode=${location?.code}&countryCode=${
            location?.country_code
          }&checkIn=${format(checkInDate, "yyyy-MM-dd")}&checkOut=${format(
            checkOutDate,
            "yyyy-MM-dd"
          )}&adult=${adults}&children=${children}`}
        >
          Search
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </>
  );
}
