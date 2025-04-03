import Navigation from "@/app/_components/Navigation";
import ButtonCustom from "../_components/Button";

import Card from "../_components/Card";
import Container from "../_components/Container";

import { FlightDetailCard, FlightSearchList } from "../_features/flight";
import FlightFacilitiesList from "@/app/_features/flight/FlightFacilitiesList";
import PricingFilter from "@/app/_components/PricingFilter";
import TransitList from "@/app/_components/TransitList";

import SidebarFilter from "../_features/flight/SidebarFilter";
import FlightSecondaryNav from "../_features/flight/FlightSecondaryNav";
import Filter from "./Filter";

import Flights from "../_features/flight/Flights";
import { Suspense } from "react";
import { FlightCardSkeleton } from "../_components/UI/FlightCardSkeleton";
import { cookies } from "next/headers";
import { getFlights } from "@/app/_lib/action";
import Message from "../_components/UI/Message";

export const metadata = {
  title: "Flight",
};

export default async function Page({ searchParams }) {
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

  // if (resp.status === 429) return <p>{resp.error}</p>;
  // if (!resp.status) return <p className="text-center">{resp.message}</p>;

  const minimumAmount = resp?.data?.minimumAmount;
  const maximumAmount = resp?.data?.maximumAmount;
  return (
    <div className="bg-[#F7FAFA] min-h-[100vh]">
      <div className="border-b border-slate-200 bg-[#F7FAFA]">
        <Navigation varient="main-nav" secondaryNav={<FlightSecondaryNav />} />
      </div>

      {resp.status ? (
        <Container className="!p-0">
          <section className="p-0 md:px-4 md:py-3 relative">
            <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-10">
              <div className="space-y-6">
                <div>
                  <ButtonCustom className="w-full mb-3" type="accent">
                    <span>Set Alert</span>
                    <img src="/ring.svg" />
                  </ButtonCustom>
                  <Card varient="large" className="absolute top-0 md:static">
                    <p className="font-normal text-xs text-gray">
                      Select Airline
                    </p>
                  </Card>
                </div>
                <SidebarFilter>
                  <Filter
                    minimumAmount={minimumAmount}
                    maximumAmount={maximumAmount}
                    test={resp}
                  />
                </SidebarFilter>
              </div>
              <div>
                {/* <FlightSearchList /> */}
                <Suspense
                  fallback={<FlightCardSkeleton />}
                  key={crypto.randomUUID()}
                >
                  <Flights searchParams={searchParams} />
                </Suspense>
              </div>
            </div>
          </section>
        </Container>
      ) : (
        <div className="mt-8">
          <Message>👋🏻 {resp.message}</Message>
        </div>
      )}
    </div>
  );
}
