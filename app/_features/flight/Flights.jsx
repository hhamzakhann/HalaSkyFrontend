import { getFlights } from "@/app/_lib/action";
import React from "react";
import { FlightDetailCard } from ".";
import { cookies } from "next/headers";

export const revalidate = 0;

export default async function Flights() {
  const cookieStore = cookies();
  // const formData = JSON.parse(cookieStore.get("formData")?.value || "{}");

  const formDataCookie = cookieStore.get("formData");

  const formData = JSON.parse(formDataCookie?.value || "{}");
  if (!Object.entries(formData).length) return <p>No Filter Applied</p>;
  const {
    destinationList,
    passengerList,
    returnDate,
    ticketType,
    travelDate,
    ...rest
  } = formData;
  console.log("FINAL TEST::", formData, destinationList);

  const transformData = {
    destinationList: destinationList.map((dest) => ({
      travelDate: dest.travelDate,
      DepartureAirport: dest.DepartureAirport.code,
      ArrivalAirport: dest.ArrivalAirport.code,
    })),
    passengerList: formData.passengerList,
  };

  console.log("TRANSFORM DATA:", transformData);

  const updatedDestinationList = [
    ...transformData.destinationList,
    {
      DepartureAirport: transformData?.destinationList.at(0).ArrivalAirport,
      ArrivalAirport: transformData?.destinationList.at(0).DepartureAirport,
      travelDate: returnDate,
    },
  ];

  const dataToLoad =
    ticketType === "return"
      ? { destinationList: updatedDestinationList, passengerList }
      : transformData;

  let flights = [];
  console.log("DATA TO LOAD::", dataToLoad);
  const resp = await getFlights(dataToLoad);
  console.log("RESP", resp);
  if (resp.status === 429) return <p>{resp.error}</p>;

  // if (!resp.status) return <p className="text-center">No flight found.</p>;
  if (!resp.status) return <p className="text-center">{resp.message}</p>;
  if (resp.status) flights = resp.data;

  const itinerariesList = flights?.itineraryGroupDetail?.flatMap(
    (flight) => flight?.itinerariesList
  );
  const flightDescriptions = flights?.itineraryGroupDetail?.flatMap(
    (flight) => flight?.description
  );

  return (
    <>
      <p className="mb-4 text-sm font-medium text-slate-400">
        {itinerariesList?.length} Result Found
      </p>
      <div className="space-y-8">
        {itinerariesList?.map((flight, index) => (
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
