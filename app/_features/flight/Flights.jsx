import { getFlights } from "@/app/_lib/action";
import React from "react";
import { FlightDetailCard } from ".";
import { cookies } from "next/headers";

export default async function Flights() {
  const cookieStore = cookies();
  // const formData = JSON.parse(cookieStore.get("formData")?.value || "{}");

  const formDataCookie = cookieStore.get("formData");

  const formData = JSON.parse(formDataCookie?.value || "{}");
  console.log("SEARCHED DATA FROM THE FLIGHT FILTER:>>>", formData);
  const { destinationList, passengerList, returnDate, ticketType, ...rest } =
    formData;

  const updatedDestinationList = [
    ...destinationList,
    {
      DepartureAirport: destinationList.at(0).ArrivalAirport,
      ArrivalAirport: destinationList.at(0).DepartureAirport,
      travelDate: returnDate,
    },
  ];

  if (!Object.entries(formData).length) return <p>No Filter Applied</p>;

  const dataToLoad =
    ticketType === "return"
      ? { destinationList: updatedDestinationList, passengerList }
      : formData;

  let flights = [];
  const resp = await getFlights(dataToLoad);
  if (resp.status === 429) return <p>{resp.error}</p>;

  if (resp.status) flights = resp.data;

  if (!resp.status) return <p className="text-center">No flight found.</p>;

  const itinerariesList = flights.flatMap((flight) => flight.itinerariesList);
  const flightDescriptions = flights.flatMap((flight) => flight.description);

  return (
    <>
      <p className="mb-4 text-sm font-medium text-slate-400">
        {itinerariesList.length} Result Found
      </p>
      <div className="space-y-8">
        {itinerariesList.map((flight, index) => (
          <FlightDetailCard
            index={index}
            flight={flight}
            test={flights}
            flightDesc={flightDescriptions}
          />
        ))}
      </div>
    </>
  );
}
