import { getFlights } from "@/app/_lib/data-service";
import React from "react";
import { FlightDetailCard } from ".";
import { cookies } from "next/headers";

export default async function Flights() {
  const cookieStore = cookies();
  // const formData = JSON.parse(cookieStore.get("formData")?.value || "{}");

  const formDataCookie = cookieStore.get("formData");

  const formData = JSON.parse(formDataCookie?.value || "{}");

  let flights = [];

  // const { data: flights } = await getFlights();
  const resp = await getFlights(formData);

  console.log("TOTAL FLIGHT RESP:", formData, resp.data);
  if (resp.status) flights = resp.data;

  if (!resp.status)
    return <p className="text-center">No flight found for the query.</p>;

  const itinerariesList = flights.flatMap((flight) => flight.itinerariesList);
  const flightDescriptions = flights.flatMap((flight) => flight.description);

  return (
    <>
      <p className="mb-4 text-sm font-medium text-slate-400">
        {flights.length} Result Found
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
