import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import emiratesImage from "@/public/emirates-image.png";
import Image from "next/image";
import { airlines } from "../airlines";

export default function AirlineInfo({ children, flight, flightDesc, index }) {
  const airlineCode = flight?.legList[0]?.schedule[0]?.carrier?.operating;
  const flightNum =
    flight?.legList[0]?.schedule[0]?.carrier?.operatingFlightNumber;
  const airlineName = airlines.get(airlineCode);
  const cabinCode =
    flight?.passengerPriceDetail[0]?.passengerList[0]?.FareComponents[0]
      ?.segments[0].segment?.cabinCode;

  // flight.legList.map()

  return (
    <div className="px-3 p-2 rounded-full bg-[#005F730D]">
      <div className="flex items-center gap-3">
        <Avatar>
          <Image
            src={`/${airlineCode}.webp`}
            width="100"
            height="100"
            className="object-contain"
            alt="emirates image icon"
          />
          <AvatarFallback>{airlineCode}</AvatarFallback>
        </Avatar>
        <div className="rounded-full bg-[#005F730D]">
          <p className="font-normal text-sm">{airlineName}</p>
          <div className="flex items-center gap-2">
            <span className="text-xs font-normal">{`${airlineCode}-${flightNum}`}</span>
            <span>&bull;</span>
            <span className="text-xs font-medium">
              {cabinCode === "Y" && "Economy"}
            </span>
            <span className="text-xs font-medium">
              {cabinCode === "C" && "Economy"}
            </span>
            <span className="text-xs font-medium">
              {cabinCode === "F" && "Economy"}
            </span>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
