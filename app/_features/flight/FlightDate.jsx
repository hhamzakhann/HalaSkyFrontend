import { useState } from "react";
import { Controller } from "react-hook-form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { ChevronsUpDown } from "lucide-react";
import { format } from "date-fns";

export default function FlightDate({ control, name, date, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  console.log("TEST DATE:::", date);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Popover open={isOpen} onOpenChange={() => setIsOpen((is) => !is)}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-between border-0 bg-transparent hover:bg-transparent hover:text-black p-0 shadow-none font-normal text-base"
            >
              <div className="flex items-center gap-2">
                <div>
                  <div className=" text-left">
                    {date
                      ? format(new Date(date), "EEE, dd MMM")
                      : "Select date"}
                  </div>
                  <div className="text-xs text-[#808080] text-left">
                    {date ? format(new Date(date), "yyyy") : ""}
                  </div>
                </div>
              </div>
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <CalendarComponent
              mode="single"
              selected={date}
              onSelect={(date) => {
                onChange(new Date(date).toISOString().split(".")[0]);
                setIsOpen(false);
              }}
              initialFocus
              // disabled={(date) => (checkInDate ? date <PopoverContent checkInDate : false)}
            />
          </PopoverContent>
        </Popover>
      )}
    />
  );
}
