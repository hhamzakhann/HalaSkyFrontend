"use client";

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
import { BASE_URL } from "@/constant/constant";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRef } from "react";
import { useState } from "react";
import planFlight from "@/public/planFlight.svg";
import Image from "next/image";

export default function Locations({
  icon,
  endpoint,
  onLocationSelect = () => {},
}) {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const controllerRef = useRef(null);

  const handleValueChange = async function (searchQuery) {
    // if (searchQuery.length <= 3) return;

    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    const newController = new AbortController();
    controllerRef.current = newController;

    const myHeaders = new Headers();
    // myHeaders.append("Authorization", `Bearer ${session.user.token}`);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("searchQuery", searchQuery);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    try {
      const response = await fetch(`${BASE_URL}${endpoint}`, requestOptions, {
        signal: newController.signal,
      });

      const data = await response.json();

      if (data.status) setLocations(data.data);
    } catch (err) {
      if (err.name === "AbortError") {
      } else {
        console.error(err.message);
      }
    }

    // if (response.status === 401) await handleSignOut();
    // const data = await response.json();

    // if (data.status) setLocation(data.data);

    // if (searchLocation.length > 0) getLocation();
  };

  const handleSelection = function (location) {
    setSelectedLocation(location);
    onLocationSelect(location);
    setIsOpen(false);
  };
  return (
    <Popover open={isOpen} onOpenChange={() => setIsOpen((is) => !is)}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={selectedLocation?.city}
          className="w-full justify-between border-0 bg-transparent hover:bg-transparent hover:text-black p-0 shadow-none font-normal text-base"
        >
          <div className="flex items-center gap-2">
            {icon && (
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-blueDark">
                {icon}
              </div>
            )}
            {selectedLocation.city || selectedLocation.country ? (
              <div>
                <div className=" text-left">{selectedLocation.city}</div>
                <div className=" text-[#808080] text-xs  text-left">
                  {selectedLocation.country}
                </div>
              </div>
            ) : (
              <p>Select location</p>
            )}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput
            onValueChange={(query) => handleValueChange(query)}
            placeholder="Search location..."
          />
          <CommandEmpty>No location found.</CommandEmpty>
          <CommandList>
            <CommandGroup>
              {locations.map((item) => (
                <CommandItem
                  key={item?.city}
                  value={item?.city}
                  onSelect={() => handleSelection(item)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedLocation?.code === item?.code
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  <div>
                    <div>{item?.city}</div>
                    <div className="text-sm text-muted-foreground">
                      {item?.country}
                    </div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
