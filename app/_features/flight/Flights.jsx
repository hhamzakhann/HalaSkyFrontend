import { getFlights } from "@/app/_lib/action";
import React from "react";
import { FlightDetailCard } from ".";
import { cookies } from "next/headers";

export const revalidate = 0;

export default async function Flights({ searchParams }) {
  console.log(searchParams);
  let { amenities, flightType, priceRange } = searchParams;
  amenities = amenities?.split("-");
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

  const transformData = {
    destinationList: destinationList.map((dest) => ({
      travelDate: dest.travelDate,
      DepartureAirport: dest.DepartureAirport.code,
      ArrivalAirport: dest.ArrivalAirport.code,
    })),
    passengerList: formData.passengerList,
  };

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

  const resp = await getFlights(dataToLoad);
  console.log("RESP", resp);
  if (resp.status === 429) return <p>{resp.error}</p>;

  // if (!resp.status) return <p className="text-center">No flight found.</p>;
  if (!resp.status) return <p className="text-center">{resp.message}</p>;
  if (resp.status) flights = resp.data;

  const itinerariesList = flights?.itineraryGroupDetail?.flatMap(
    (flight) => flight?.itinerariesList
  );

  let displayItinerariesList = [];
  if (flightType === "direct")
    displayItinerariesList = itinerariesList.filter((item) =>
      item.legList.some((item) => item.schedule.length === 1)
    );

  if (flightType === "1-transit")
    displayItinerariesList = itinerariesList.filter((item) =>
      item.legList.some((item) => item.schedule.length === 2)
    );
  if (flightType === "2+Transit")
    displayItinerariesList = itinerariesList.filter((item) =>
      item.legList.some((item) => item.schedule.length > 2)
    );

  if (!flightType) displayItinerariesList = itinerariesList;

  // if (true) {
  //   const test = itinerariesList.map((item) => {
  //     const amenities = item.amenities1.flatMap((item) => {
  //       const segments = item.scheduleDetail.flatMap((item) => item.segments);
  //       return segments.at(0).amenitiesList;
  //     });
  //     return amenities;
  //   });
  //   console.log("aksjdhflkajhsdlfkj", test[0]);
  // }

  // console.log(
  //   "FLITERED ITINEREIES",
  //   itinerariesList.length,
  //   displayItinerariesList.length
  // );
  const flightDescriptions = flights?.itineraryGroupDetail?.flatMap(
    (flight) => flight?.description
  );

  return (
    <>
      <p className="mb-4 text-sm font-medium text-slate-400">
        {displayItinerariesList?.length} Result Found
      </p>
      <div className="space-y-8">
        {displayItinerariesList?.map((flight, index) => (
          <FlightDetailCard
            index={index}
            key={index}
            flight={flight}
            test={displayItinerariesList}
            flightDesc={flightDescriptions}
          />
        ))}
      </div>
    </>
  );
}
