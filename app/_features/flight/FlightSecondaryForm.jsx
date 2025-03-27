"use client";

import Image from "next/image";
import FromToIcon from "@/public/fromTo-icon.svg";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Locations from "@/app/_components/formControls/Locations";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown, Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import calenderIcon from "@/public/calender-icon.svg";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import ButtonCustom from "@/app/_components/Button";
import usersIcon from "@/public/users-icons.svg";
import { useRouter } from "next/navigation";

const MAX_ROWS = 3;

export default function FlightSecondaryForm({
  destinationList,
  passengerList,
  selectedArrivalLocation,
  selectedDepartureLocation,
  ticketType,
}) {
  const defaultAdults =
    passengerList?.find((p) => p.type === "ADT")?.total || 1;
  const defaultChildren =
    passengerList?.find((p) => p.type === "C06")?.total || 0;

  const [checkOutOpen, setCheckOutOpen] = useState(false);
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [adults, setAdults] = useState(defaultAdults);
  const [children, setChildren] = useState(defaultChildren);
  const [departureLocation, setDepartureLocation] = useState(undefined);
  const [arrivalLocation, setArrivalLocation] = useState(undefined);
  const router = useRouter();

  const DepartureAirport = destinationList?.at(0)?.DepartureAirport;
  const ArrivalAirport = destinationList?.at(0)?.ArrivalAirport;
  const departureDefaultDate = destinationList?.at(0)?.travelDate;

  const { control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      destinationList: destinationList
        ? destinationList
        : [
            {
              travelDate: format(
                departureDefaultDate || new Date(),
                "yyyy-MM-dd'T'HH:mm:ss"
              ),
              DepartureAirport: DepartureAirport || "",
              ArrivalAirport: ArrivalAirport || "",
            },
          ],
      passengerList: [
        {
          type: "ADT",
          total: defaultAdults,
        },
        {
          type: "C06",
          total: defaultChildren,
        },
      ],
      ticketType,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "destinationList",
  });

  useEffect(() => {
    setValue("passengerList", [
      { type: "ADT", total: adults },
      { type: "C06", total: children },
    ]);
  }, [adults, children, setValue]);
  const onSubmit = async (data) => {
    console.log("On submittion properties", data);
    await fetch("/api/set-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        selectedDepartureLocation:
          departureLocation || selectedDepartureLocation,
        selectedArrivalLocation: arrivalLocation || selectedArrivalLocation,
      }),
    });
    router.refresh(); // Navigate to the server component page
  };

  const handleAddRow = () => {
    if (fields.length < MAX_ROWS) {
      append({
        travelDate: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss"),
        DepartureAirport: "",
        ArrivalAirport: "",
      });
    }
  };

  const handleRemoveRow = (index) => {
    if (fields.length > 1) {
      remove(index);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div className="grid grid-cols-[1fr_1fr]  md:grid-cols-[1fr_1fr_1fr_2fr_2fr_auto]">
          <div
            className={`search-flight-item px-3 py-2 md:px-4 md:py-3 space-y-2 `}
          >
            {index > 0 && watch("ticketType") === "multiCity" ? (
              <div className="w-full h-full flex items-end">
                {index === watch("destinationList").length - 1 ? (
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      className="rounded-full "
                      onClick={handleAddRow}
                    >
                      <Plus />
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-full "
                      onClick={handleRemoveRow}
                    >
                      <Minus />
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="outline"
                    className="rounded-full "
                    onClick={handleRemoveRow}
                  >
                    <Minus />
                  </Button>
                )}
              </div>
            ) : (
              <>
                <div className="flex items-center gap-1">
                  <img src="/select.svg" />
                  <span className="font-normal text-xs">Select Trip</span>
                </div>
                <div className="flex items-center gap-1">
                  <Controller
                    name="ticketType"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <Select
                        defaultValue={ticketType}
                        onValueChange={onChange}
                      >
                        <SelectTrigger className=" p-0 h-auto border-none shadow-none focus:ring-transparent">
                          <SelectValue placeholder="Select a Trip" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="oneWay">One-way</SelectItem>
                            <SelectItem value="return">Return</SelectItem>
                            <SelectItem value="multiCity">
                              Multi City
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
              </>
            )}
          </div>
          <div className="search-flight-item px-3 py-2 md:px-4 md:py-3 flight-from">
            <div className="flex items-center gap-1">
              <img src="/airplane.svg" />
              <span className="font-normal text-xs">From</span>
            </div>
            <div className="flex items-center gap-1">
              <Controller
                name={`destinationList.${index}.DepartureAirport`}
                control={control}
                render={({ field: { onChange, value } }) => {
                  return (
                    <Locations
                      endpoint="/flight/airports"
                      defaultSearchQuery={DepartureAirport}
                      defaultLocationSelected={selectedDepartureLocation}
                      onLocationSelect={(location) => {
                        onChange(location.code);
                        setDepartureLocation(location);
                      }}
                    />
                  );
                }}
              />
            </div>
            <div className="fromToIcon-container">
              <Image src={FromToIcon} />
            </div>
          </div>
          <div className="search-flight-item px-3 py-2 md:px-7 md:py-3">
            <div className="flex items-center gap-1">
              <img src="/landing-airplane-icon.svg" />
              <span className="font-normal text-xs">To</span>
            </div>
            <div className="flex items-center gap-1">
              <Controller
                name={`destinationList.${index}.ArrivalAirport`}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Locations
                    endpoint="/flight/airports"
                    defaultSearchQuery={ArrivalAirport}
                    defaultLocationSelected={selectedArrivalLocation}
                    onLocationSelect={(location) => {
                      onChange(location.code);
                      setArrivalLocation(location);
                    }}
                  />
                )}
              />
            </div>
          </div>
          <div className="search-flight-item px-3 py-2 md:px-4 md:py-3 space-y-2">
            <div className="flex items-center gap-1">
              <img src="/calender-icon.svg" />
              <span className="font-normal text-xs">Flight Date</span>
            </div>
            <div className="flex items-center gap-1">
              <Controller
                name={`destinationList.${index}.travelDate`}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Popover open={checkOutOpen} onOpenChange={setCheckOutOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-between border-0 bg-transparent hover:bg-transparent hover:text-black p-0 shadow-none font-normal text-base"
                      >
                        <div className="flex items-center gap-2">
                          <div>
                            <div className=" text-left">
                              {departureDefaultDate || checkOutDate
                                ? format(
                                    departureDefaultDate || checkOutDate,
                                    "EEE, dd MMM"
                                  )
                                : "Select date"}
                            </div>
                            <div className="text-xs text-[#808080] text-left">
                              {departureDefaultDate || checkOutDate
                                ? format(
                                    departureDefaultDate || checkOutDate,
                                    "yyyy"
                                  )
                                : ""}
                            </div>
                          </div>
                        </div>
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={new Date(departureDefaultDate)}
                        onSelect={(date) => {
                          onChange(new Date(date).toISOString().split(".")[0]);
                          setCheckOutDate(date);
                          setCheckOutOpen(false);
                        }}
                        initialFocus
                        // disabled={(date) => (checkInDate ? date < checkInDate : false)}
                      />
                    </PopoverContent>
                  </Popover>
                )}
              />
            </div>
          </div>
          <div
            className={`search-flight-item px-3 py-2 md:px-4 md:py-3 space-y-2 ${
              index > 0 ? "opacity-0 pointer-events-none" : ""
            }`}
          >
            <div className="flex items-center gap-1">
              <img src="/seat-icon.svg" />
              <span className="font-normal text-xs">
                Passenger & Cabin Class
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Popover open={guestsOpen} onOpenChange={setGuestsOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-between border-0 bg-transparent hover:bg-transparent hover:text-black p-0 shadow-none font-normal text-base"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-blueDark">
                        <Image
                          src={usersIcon}
                          className="w-4 h-4 text-[#15193c]"
                        />
                      </div>
                      <div className=" text-left">
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

          <div
            className={`search-flight-item  px-3 py-2 ${
              index > 0 ? "opacity-0 pointer-events-none" : ""
            }`}
          >
            <ButtonCustom
              variant="icon"
              htmlType="submit"
              className="bg-accent w-fit p-3 rounded-full"
            >
              <img src="/search-white-icon.svg" />
            </ButtonCustom>
          </div>
        </div>
      ))}
    </form>
  );
}
