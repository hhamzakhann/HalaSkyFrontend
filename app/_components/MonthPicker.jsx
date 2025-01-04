"use client";

import { useState } from "react";
import { addMonths, format, startOfMonth } from "date-fns";
import { ChevronLeft, ChevronRight, CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function MonthPicker({ classWrapper }) {
  const [date, setDate] = useState();
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const years = Array.from({ length: 71 }, (_, i) => 1960 + i);

  const handleMonthSelect = (monthIndex) => {
    const newDate = startOfMonth(new Date(currentYear, monthIndex));
    setDate(newDate);
  };

  const handleYearChange = (year) => {
    setCurrentYear(parseInt(year));
    if (date) {
      const newDate = startOfMonth(new Date(parseInt(year), date.getMonth()));
      setDate(newDate);
    }
  };

  const goToPreviousYear = () => {
    setCurrentYear((prev) => prev - 1);
  };

  const goToNextYear = () => {
    setCurrentYear((prev) => prev + 1);
  };

  return (
    <div className={`${classWrapper}`}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[180px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "MMM - yyyy") : <span>Pick a month</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPreviousYear}
                disabled={currentYear <= 1960}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Select
                value={currentYear.toString()}
                onValueChange={handleYearChange}
              >
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                size="icon"
                onClick={goToNextYear}
                disabled={currentYear >= 2030}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {months.map((month, index) => (
                <Button
                  key={month}
                  onClick={() => handleMonthSelect(index)}
                  variant={
                    date &&
                    date.getMonth() === index &&
                    date.getFullYear() === currentYear
                      ? "default"
                      : "outline"
                  }
                  className="w-full"
                >
                  {month.slice(0, 3)}
                </Button>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
