import { useState } from "react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import calenderIcon from "@/public/calender-icon.svg";
import { ChevronsUpDown } from "lucide-react";
import Image from "next/image";

export default function CalenderPopover({
  labelDate = new Date(),
  onChange = () => {},
  checkInDate,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(undefined);

  const handleSelect = (date) => {
    console.log(
      "ON CHANGE VALUE::::",
      date,
      new Date(date).toISOString().split(".")[0] + 1
    );
    onChange(new Date(date).toISOString().split(".")[0]);
    setSelectedDate(date);
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={() => setIsOpen((is) => !is)}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-between border-0 bg-transparent hover:bg-transparent hover:text-black p-0 shadow-none font-normal text-base"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-blueDark">
              <Image src={calenderIcon} className="w-4 h-4 " />
            </div>
            <div>
              <div className=" text-left">
                {format(selectedDate || labelDate, "EEE, dd MMM")}
              </div>
              <div className="text-xs text-[#808080] text-left">
                {format(selectedDate || labelDate, "yyyy")}
              </div>
            </div>
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <CalendarComponent
          mode="single"
          selected={labelDate}
          onSelect={(date) => handleSelect(date)}
          initialFocus
          disabled={(date) => (checkInDate ? date < checkInDate : false)}
        />
      </PopoverContent>
    </Popover>
  );
}
