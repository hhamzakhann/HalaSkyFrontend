"use client";
import Image from "next/image";
import AirlineInfo from "@/app/_components/AirlineInfo";
import AirlinePriceInfo from "@/app/_components/AirlinePriceInfo";
import Card from "@/app/_components/Card";
import { SearchFlightDetail } from ".";
// import globeImage from "@/public/globe-icon.svg";

export default function FlightDetailCard({ test, flight, flightDesc, index }) {
  console.log("FLIGHT", test.slice(0, 2));
  return (
    <header>
      <Card varient="small" className="relative">
        {/* <Image src="/globe-bg.svg" fill className="!-bottom-10 !top-auto" /> */}
        <AirlineInfo flight={flight} index={index} flightDesc={flightDesc}>
          <AirlinePriceInfo className="ml-auto" flight={flight} />
        </AirlineInfo>
        {/* {flight.legList.map((leg) => ( */}
        <SearchFlightDetail
          internaryIndex={index}
          flight={flight}
          flightDesc={flightDesc}
        />
        {/* ))} */}
      </Card>
    </header>
  );
}
