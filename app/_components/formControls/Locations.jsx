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
import { useEffect, useRef, useState } from "react";

export default function Locations({
  icon,
  endpoint,
  onLocationSelect = () => {},
  defaultSearchQuery = "",
  defaultLocationSelected,
  error = undefined,
}) {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({});
  const [searchQuery, setSearchQuery] = useState(defaultSearchQuery);
  const [defaultLocationSelectedState, setDefaultLocationSelectedState] =
    useState(defaultLocationSelected);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const getLocations = async function () {
      const myHeaders = new Headers();
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
          signal: controller.signal,
        });
        const data = await response.json();

        if (data.status && Array.isArray(data.data)) {
          setLocations(data.data);
        } else {
          setLocations([]);
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          setLocations([]);
          console.error(err.message);
        }
      }
    };

    getLocations();

    return function () {
      controller.abort();
    };
  }, [searchQuery]);

  const handleSelection = function (location) {
    setDefaultLocationSelectedState(undefined);
    setSelectedLocation(location);
    onLocationSelect(location);
    setIsOpen(false);
  };

  const getItemValue = (item) => {
    return `${item.city}-${item.code}`.toLowerCase();
  };

  const getCountryName = (cityCode) =>
    locations.find((loc) => loc.code === cityCode)?.country || null;

  const getCityName = (cityCode) =>
    locations.find((loc) => loc.code === cityCode)?.city || 'Select Location';

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className="w-full justify-between border-0 bg-transparent hover:bg-transparent hover:text-black p-0 shadow-none font-normal text-base"
        >
          <div className="flex items-center gap-2">
            {icon && (
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-blueDark">
                {icon}
              </div>
            )}
            {selectedLocation.city || defaultLocationSelectedState ? (
              <div>
                <div className="text-left">
                  {selectedLocation.city ||
                    defaultLocationSelectedState?.city ||
                    getCityName(defaultLocationSelected)}
                </div>
                <div className="text-[#808080] text-xs text-left">
                  {selectedLocation.country ||
                    defaultLocationSelectedState?.country ||
                    getCountryName(defaultLocationSelected)}
                </div>
              </div>
            ) : (
              <p className={`${error ? "text-red-600" : ""}`}>Select location</p>
            )}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[500px] p-0">
        <Command shouldFilter={false}>
          <CommandInput
            onValueChange={(value) => setSearchQuery(value)}
            placeholder="Search location..."
          />
          <CommandEmpty>No location found.</CommandEmpty>
          <CommandList>
            <CommandGroup>
              {locations.map((item) => (
                <CommandItem
                  key={item.code}
                  value={getItemValue(item)}
                  onSelect={() => handleSelection(item)}
                  className="flex justify-between w-full"
                >
                  <div className="flex items-center">
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedLocation.code === item.code
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    <div>
                      <div>{item.city || item.state || "Unknown City"}</div>
                      <div className="text-sm text-muted-foreground">
                        {item.country || "Unknown Country"}
                      </div>
                    </div>
                  </div>
                  {(item.code || item.name) && (
                    <div className="text-right">
                      {item.code && (
                        <div className="font-semibold">{item.code}</div>
                      )}
                      {item.name && (
                        <div className="text-xs text-muted-foreground">
                          {item.name}
                        </div>
                      )}
                    </div>
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
