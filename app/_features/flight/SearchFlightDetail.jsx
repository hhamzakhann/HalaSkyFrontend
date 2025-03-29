import Image from "next/image";

import planeGrayIcon from "@/public/plane-gray-icon.svg";
import landingPlanIcon from "@/public/landing-plan-icon.svg";
import luggageBagIcon from "@/public/luggageBag-icon.svg";
import { Tag } from "antd";
import { getAirportInfo } from "@/app/_lib/utils";

import { format, parse } from "date-fns";
import { parseISO, differenceInMinutes } from "date-fns";
import { zonedTimeToUtc } from "date-fns-tz";
import { utcToZonedTime } from "date-fns-tz";

function formatDate(dateString) {
  const date = new Date(dateString);
  return format(date, "EEE, d MMM"); // Example: "Sun, 20 Aug"
}

// function formateTime(timeString) {
//   const parsedTime = parse(timeString, "HH:mm:ssXXX", new Date());
//   return format(parsedTime, "HH:mm");
// }

function formatFlightDurations(flights) {
  return flights.map((flight) => {
    const departureTime = parseISO(`2024-01-01T${flight.departure.time}`);
    const arrivalTime = parseISO(`2024-01-01T${flight.arrival.time}`);

    // Convert to UTC
    const utcDeparture = utcToZonedTime(departureTime, "UTC");
    const utcArrival = utcToZonedTime(arrivalTime, "UTC");

    // Calculate difference in minutes
    const diffMinutes = Math.abs(differenceInMinutes(utcArrival, utcDeparture));

    // Convert to hours and minutes
    const hours = Math.floor(diffMinutes / 60);
    const minutes = diffMinutes % 60;

    return { id: flight.id, duration: `${hours}hr ${minutes}min` };
  });
}

const calcFlightTransists = function ({ schedule }) {
  if (schedule.length === 1) return "One way";

  const isSameAllFlightNum = schedule
    .map((sch) => sch.carrier.operatingFlightNumber)
    .every((num, i, arr) => num === arr[0]);

  if (isSameAllFlightNum && schedule.length > 1) return "Direct Flight 🛫";
  if (!isSameAllFlightNum && schedule.length > 1) return `${schedule.length}`;
};
let totalBaggage = 0;

export default function SearchFlightDetail({
  flight,
  flightDesc,
  internaryIndex,
  internaryList,
}) {
  console.log("FLIGHT DESCRIPTION:::", flightDesc);

  const departureTime = flight?.legList[0]?.schedule[0]?.departure.time;
  const arrivalTime = flight?.legList[0]?.schedule[0]?.arrival.time;
  const seatsAvailibilty =
    flight?.passengerPriceDetail[0]?.passengerList[0]?.FareComponents[0]
      ?.segments[0].segment?.seatsAvailable;

  const stops = flight?.legList[0]?.schedule?.length;

  function calcBaggage(legIndex) {
    flight?.passengerPriceDetail?.forEach((passDetail, index) => {
      const baggage = passDetail?.passengerList?.forEach((passenger, index) => {
        totalBaggage =
          passenger?.baggageInformation[legIndex]?.detail.weight || 0;
      });
    });
    return totalBaggage;
  }

  function formatFlightDurations(flights) {
    const totalMinutes = flights.reduce((sum, flight) => {
      const departureTime = parseISO(`2024-01-01T${flight.departure.time}`);
      const arrivalTime = parseISO(`2024-01-01T${flight.arrival.time}`);
      return sum + Math.abs(differenceInMinutes(arrivalTime, departureTime));
    }, 0);

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours}hr ${minutes}min`;
  }

  function formateTime(time) {
    console.log("DEPARTURE TIME:", time);

    const fullTime = `2025-01-01T${time}`;

    const date = parseISO(fullTime);
    return format(date, "HH:mm");
  }

  return (
    <div className="  mx-auto divide-y">
      <div className=" py-8 pt-20 px-8">
        <div className="grid grid-cols-[35%_30%_35%] gap-y-14">
          {flightDesc[0].legDescriptions.map((desc, index) => {
            console.log(
              "asd",
              desc?.departureLocation,
              desc.arrivalLocation,
              getAirportInfo(desc.departureLocation)?.name,
              getAirportInfo(desc.arrivalLocation)?.name
            );
            return (
              <>
                <div className="flex flex-col gap-1 place-items-end">
                  <p className="flex items-center gap-2 font-normal text-xs text-gray">
                    <Image src={planeGrayIcon} alt="depart plane icon" />
                    <span>From</span>
                  </p>
                  <p className="font-normal text-xl">
                    {getAirportInfo(desc.departureLocation)?.name}
                  </p>
                  <p className="flex items-center gap-2 font-normal text-xs">
                    <span className="text-gray">
                      {formatDate(desc.departureDate)}
                    </span>
                    <span className="text-gray">&bull;</span>
                    <span>{formateTime(departureTime)}</span>
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-xs font-normal">
                    {formatFlightDurations(flight.legList[index].schedule)}
                  </p>
                  <p className="text-xs font-normal space-y-6">
                    {stops === 1 ? (
                      "Direct"
                    ) : (
                      <span className="inline-flex gap-1">
                        <span className="font-bold">
                          {calcFlightTransists(flight.legList[index])}
                        </span>
                        <span>Transits</span>
                      </span>
                    )}
                  </p>
                </div>
                <div className="flex flex-col gap-1 ">
                  <p className="flex items-center gap-2 font-normal text-xs text-gray">
                    <Image src={landingPlanIcon} alt="landing plane icon" />
                    <span>To</span>
                  </p>
                  <p className="font-normal text-xl">
                    {getAirportInfo(desc.arrivalLocation)?.name}
                  </p>
                  <p className="flex items-center gap-2 font-normal text-xs">
                    <span className="text-gray">-----</span>
                    <span className="text-gray">&bull;</span>
                    <span>{formateTime(arrivalTime)}</span>
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 font-normal text-sm col-span-full">
                  <p>{stops === 1 && "0 Stop"}</p>
                  <p>{stops === 2 && "Two Stops"}</p>
                  <p>{stops > 2 && `2+ Stops`}</p>
                  <div className="basis-52 flex items-center justify-center gap-3">
                    <Image src={luggageBagIcon} alt="Luggage bag icon" />
                    <span>Total : {calcBaggage(index)}Kg</span>
                  </div>
                  <Tag
                    bordered={false}
                    color="red"
                    className="text-sm font-normal"
                  >
                    {seatsAvailibilty} Seats Left
                  </Tag>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
