"use client";

import { useState } from "react";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect } from "react";

export function DatePickerWithRange({
  className,
  calenderIcon = false,
  bordered = false,
  defaultDate = {},
  onSetDate,
}) {
  // const [date, setDate] = useState(() => {
  //   const from = new Date(defaultDate.from);
  //   const to = new Date(defaultDate.to);
  //   return { from, to };
  // });

  const [date, setDate] = useState({});

  useEffect(() => {
    const from = new Date(defaultDate.from || Date.now);
    const to = new Date(defaultDate.to || Date.now);
    setDate({ from, to });
  }, []);

  const handleDateSelect = function ({ from, to }) {
    console.log(from, to);
  };

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              ` justify-start text-left font-normal text-base ${
                !bordered
                  ? "border-none shadow-none !p-0 !w-full bg-transparent"
                  : ""
              }`,
              !date && "text-muted-foreground"
            )}
          >
            {calenderIcon && <CalendarIcon />}
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={(value) => {
              setDate(value);
              onSetDate(value);
            }}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
