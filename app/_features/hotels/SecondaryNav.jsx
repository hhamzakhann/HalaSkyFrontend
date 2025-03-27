"use client";

import ButtonCustom from "@/app/_components/Button";
import Container from "@/app/_components/Container";
import {
  DatePickerWithRange,
  SelectShadecn,
} from "@/app/_components/formControls";
import Locations from "@/app/_components/formControls/Locations";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import adultsIcon from "@/public/adults-icon.svg";
import buildingIcon from "@/public/building-icon.svg";
import calenderIcon from "@/public/calender-icon.svg";
import { format } from "date-fns";
import { Check, ChevronsUpDown, Users } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SecondaryNav({ defaultDates, defaultData }) {
  const [locationOpen, setLocationOpen] = useState(false);
  const [dateRangeSelection, setDateRangeSelection] = useState({});
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(2);
  const [location, setLocation] = useState(undefined);

  console.log("default dates::::", defaultData);

  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSearch = function () {
    const fromDate = new Date(dateRangeSelection?.from);
    const toDate = new Date(dateRangeSelection?.to);

    const params = new URLSearchParams(searchParams.toString());
    params.set("cityCode", location.code);
    params.set("countryCode", location.country_code);

    if (dateRangeSelection?.from && dateRangeSelection?.to) {
      params.set("checkIn", format(fromDate || new Date(), "yyyy-MM-dd"));
      params.set("checkout", format(toDate || new Date(), "yyyy-MM-dd"));
    }
    params.set("adult", adults);
    if (children > 0) {
      params.set("children", children);
      params.set(
        "childAges",
        Array.from({ length: children }, (_, i) =>
          Math.floor(Math.random() * (7 - 4) + 4)
        ).join(",")
      );
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="border-b border-slate-200">
      <Container className=" !p-0">
        <div className="grid grid-cols-[1fr_1fr]  md:grid-cols-[1fr_1fr_1fr_2fr_2fr_auto]">
          <div className="search-flight-item px-3 py-2 md:px-4 md:py-3 col-span-3">
            <div className="flex items-center gap-1">
              <Image src={buildingIcon} alt="building icon" />
              <span className="font-normal text-xs text-gray">
                Select Destination
              </span>
            </div>

            <div className="flex items-center gap-1">
              <div className=" rounded-lg w-full ">
                <Locations
                  endpoint="/hotel/locations"
                  onLocationSelect={(loc) => setLocation(loc)}
                  defaultLocationSelected={defaultData.cityCode}
                  defaultSearchQuery={defaultData.cityCode}
                />
              </div>
            </div>
          </div>
          <div className="search-flight-item px-3 py-2 md:px-4 md:py-3">
            <div className="flex items-center gap-1">
              <Image src={calenderIcon} alt="calender icon" />
              <span className="font-normal text-xs text-gray">Date</span>
            </div>
            <DatePickerWithRange
              defaultDate={defaultDates}
              onSetDate={(value) => setDateRangeSelection(value)}
            />
          </div>
          <div className="search-flight-item px-3 py-2 md:px-4 md:py-3 ">
            <div className="col-span-1 sm:col-span-2 lg:col-span-3">
              <div className="text-xs font-normal text-[#808080] mb-1">
                Adult & Childrens
              </div>

              <Popover open={guestsOpen} onOpenChange={setGuestsOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-between border-0 bg-transparent hover:bg-transparent hover:text-black p-0 shadow-none h-auto"
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
                            onClick={() =>
                              setChildren(Math.max(0, children - 1))
                            }
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
          <div className="search-flight-item  px-3 py-2">
            <ButtonCustom
              variant="accent"
              className="w-10 h-10 rounded-full bg-accent"
              onClick={handleSearch}
            >
              <img src="/search-white-icon.svg" className="w-[80%] h-[80%]" />
            </ButtonCustom>
          </div>
        </div>
      </Container>
    </div>
  );
}
