"use client";

import { DatePickerWithRange } from "@/app/_components/formControls";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronsUpDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const Filter = ({ searchParams }) => {
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [dateRangeSelection, setDateRangeSelection] = useState({
    from: new Date(searchParams.checkIn).toISOString() || new Date(),
    to: new Date(searchParams.checkOut).toISOString() || new Date(),
  });
  const [adults, setAdults] = useState(searchParams.adult || 1);
  const [children, setChildren] = useState(searchParams.children || 2);

  return (
    <>
      <div className="flex items-center bg-white rounded-2xl shadow-md px-4 py-4">
        <div className="date flex-1">
          <div className="flex items-center gap-1">
            <Image
              src="/calendar-gray.png"
              alt="calender icon"
              width={12}
              height={14}
            />
            <span className="font-normal text-xs text-[#949494]">Date</span>
          </div>
          <DatePickerWithRange
            defaultDate={dateRangeSelection}
            onSetDate={(value) => setDateRangeSelection(value)}
          />
        </div>
        <div className="adults flex-1">
          <div className="flex items-center gap-1">
            <Image src="/Group-Car.png" alt="car icon" width={12} height={14} />
            <span className="font-normal text-xs text-[#949494]">
              Adult & Childrens
            </span>
          </div>
          <Popover open={guestsOpen} onOpenChange={setGuestsOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-between border-0 bg-transparent hover:bg-transparent hover:text-black p-0 shadow-none h-9"
              >
                <div className="font-normal text-left text-base">
                  {adults} {adults === 1 ? "Adult" : "Adults"}, {children}{" "}
                  {children === 1 ? "Child" : "Children"}
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
                      <span className="w-8 text-center test">{adults}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => setAdults(Math.max(1, adults + 1))}
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
                      <span className="w-8 text-center test">{children}</span>
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
                <Button className="w-full" onClick={() => setGuestsOpen(false)}>
                  Apply
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </>
  );
};
