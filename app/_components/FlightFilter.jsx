import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { ArrowRight, ChevronsUpDown, Minus } from "lucide-react";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import ButtonCustom from "./Button";

import { Controller, useFieldArray, useForm } from "react-hook-form";

import planFlight from "@/public/planFlight.svg";
import planLanding from "@/public/planLanding.svg";
import usersIcon from "@/public/users-icons.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { flightSchema } from "../_lib/zod";
import CalenderPopover from "./CalenderPopover";
import Locations from "./formControls/Locations";

const actionButton = [
  { id: 1, label: "One-way", type: "oneWay" },
  { id: 2, label: "Return", type: "return" },
  { id: 3, label: "Multi City", type: "multiCity" },
];

export default function FlightFilter() {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [selectedTicketType, setSelectedTicketType] = useState("oneWay");

  const [selectedDepartureLocation, setSelectedDepartureLocation] = useState(
    {}
  );
  const [selectedArrivalLocation, setSelectedArrivalLocation] = useState({});

  const router = useRouter();
  const MAX_ROWS = 3;

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(flightSchema),
    defaultValues: {
      destinationList: [
        {
          travelDate: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss"),
          DepartureAirport: {},
          ArrivalAirport: {},
        },
      ],
      passengerList: [
        {
          type: "ADT",
          total: 1,
        },
        {
          type: "C06",
          total: 0,
        },
      ],
      returnDate: "",
      ticketType: "oneWay",
    },
  });

  console.log(errors);

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

  // Handle form submission
  const onSubmit = async (data) => {
    console.log("Form data:>>>>", data);

    await fetch("/api/set-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    router.push("/flights"); // Navigate to the server component page
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

  const handleRemoveRow = (_, index) => {
    if (fields.length > 1) {
      remove(index);
    }
  };

  const handleTicketTypeChange = (type) => {
    setSelectedTicketType(type);

    if (type === "oneWay") {
      setValue("ticketType", "oneWay");
      setValue("destinationList", [
        {
          travelDate: format(checkOutDate, "yyyy-MM-dd'T'HH:mm:ss"),
          DepartureAirport: selectedDepartureLocation.code || "",
          ArrivalAirport: selectedArrivalLocation.code || "",
        },
      ]);
    } else if (type === "multiCity") {
      setValue("ticketType", "multiCity");
      handleAddRow();
    } else if (type === "return") {
      setValue("ticketType", "return");
      setValue("destinationList", [
        {
          travelDate: format(checkOutDate, "yyyy-MM-dd'T'HH:mm:ss"),
          DepartureAirport: selectedDepartureLocation.code || "",
          ArrivalAirport: selectedArrivalLocation.code || "",
        },
      ]);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Search Form */}
      <div className="grid grid-cols-1  sm:grid-cols-3 lg:grid-cols-11 gap-4 mb-4 items-end">
        {fields.map((field, index) => (
          <Fragment key={field.id}>
            {/* Location */}

            <div className="col-span-1 lg:col-span-4 flex">
              <div className="grid grid-cols-2 w-full">
                <div className="text-sm mb-1 font-normal text-blueDark">
                  From:
                </div>
                <div className="text-sm mb-1 font-normal text-blueDark">
                  To:
                </div>
                <div className="col-span-full flex border rounded-lg ">
                  <div className="relative bg-[#f2f4f5]  p-4 flex-1 after:content-[''] after:border after:border-slate-500 after:absolute after:right-0 after:h-1/2">
                    <Controller
                      name={`destinationList.${index}.DepartureAirport`}
                      control={control}
                      render={({ field: { onChange, value } }) => {
                        return (
                          <Locations
                            icon={
                              <Image src={planFlight} className="w-4 h-4 " />
                            }
                            endpoint="/flight/airports"
                            onLocationSelect={(location) => {
                              onChange(location);
                            }}
                            error={
                              errors?.destinationList?.length > 0 &&
                              errors?.destinationList[index]?.DepartureAirport
                                ?.message
                            }
                          />
                        );
                      }}
                    />
                  </div>
                  <div className="bg-[#f2f4f5]  p-4 flex-1">
                    <Controller
                      name={`destinationList.${index}.ArrivalAirport`}
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <Locations
                          icon={
                            <Image
                              src={planLanding}
                              className="w-4 h-4 text-[#15193c]"
                            />
                          }
                          endpoint="/flight/airports"
                          onLocationSelect={(location) => {
                            onChange(location);
                          }}
                          error={
                            errors?.destinationList?.length > 0 &&
                            errors?.destinationList[index]?.ArrivalAirport
                              ?.message
                          }
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Check Out */}
            <div className="col-span-1 lg:col-span-2">
              <div className="text-sm text-blueDark mb-1 font-normal">
                Check Out
              </div>
              <div className="bg-[#f2f4f5] rounded-lg p-4 border">
                <Controller
                  name={`destinationList.${index}.travelDate`}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <CalenderPopover
                      onChange={onChange}
                      checkInDate={checkInDate}
                    />
                  )}
                />
              </div>
            </div>
            {/* Return Date */}
            {selectedTicketType === "return" && (
              <div className="col-span-1 lg:col-span-2">
                <div className="text-sm text-blueDark mb-1 font-normal">
                  Return Date
                </div>
                <div className="bg-[#f2f4f5] rounded-lg p-4 border">
                  <Controller
                    name={`returnDate`}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <CalenderPopover
                        onChange={onChange}
                        checkInDate={checkInDate}
                      />
                    )}
                  />
                </div>
              </div>
            )}

            {/* Guests */}
            {index === 0 ? (
              <>
                <div className="col-span-1 sm:col-span-2 lg:col-span-3">
                  <div className="text-sm text-blueDark mb-1 font-normal ">
                    Guests
                  </div>
                  <div className="bg-[#f2f4f5] rounded-lg p-4 border">
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
                              {adults} {adults === 1 ? "Adult" : "Adults"},{" "}
                              {children} {children === 1 ? "Child" : "Children"}
                            </div>
                          </div>
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[240px] p-4">
                        <div className="space-y-4">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <label className="text-sm font-medium">
                                Adults
                              </label>
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() =>
                                    setAdults(Math.max(1, adults - 1))
                                  }
                                >
                                  -
                                </Button>
                                <span className="w-8 text-center">
                                  {adults}
                                </span>
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
                              <label className="text-sm font-medium">
                                Children
                              </label>
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
                                <span className="w-8 text-center">
                                  {children}
                                </span>
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

                <ButtonCustom type="accent" htmlType="submit">
                  Search
                  <ArrowRight className="ml-2 w-5 h-5" />
                </ButtonCustom>
              </>
            ) : (
              <>
                <ButtonCustom
                  variant="icon"
                  className="border border-slate-400"
                  onClick={(e) => handleRemoveRow(e, index)}
                >
                  <Minus />
                </ButtonCustom>
                <div></div>
                <div></div>
              </>
            )}
          </Fragment>
        ))}

        <div className="col-span-full space-x-3">
          {actionButton.map((button, i) => (
            <ButtonCustom
              key={button.id}
              variant="outline"
              className={`border-primary rounded-full ${
                selectedTicketType === button.type
                  ? "bg-blueDark text-slate-50"
                  : ""
              } hover:bg-blueDark hover:text-slate-50`}
              onClick={() => handleTicketTypeChange(button.type)}
            >
              {button.label}
            </ButtonCustom>
          ))}
        </div>
      </div>
    </form>
  );
}
