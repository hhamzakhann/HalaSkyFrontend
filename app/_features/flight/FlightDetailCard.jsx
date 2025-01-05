import Image from "next/image";
import AirlineInfo from "@/app/_components/AirlineInfo";
import AirlinePriceInfo from "@/app/_components/AirlinePriceInfo";
import Card from "@/app/_components/Card";
import { SearchFlightDetail } from ".";
// import globeImage from "@/public/globe-icon.svg";

export default function FlightDetailCard() {
  return (
    <header>
      <Card varient="small" className="relative">
        <Image src="/globe-bg.svg" fill className="!-bottom-10 !top-auto" />
        <AirlineInfo>
          <AirlinePriceInfo className="ml-auto" />
        </AirlineInfo>
        <SearchFlightDetail />
      </Card>
    </header>
  );
}
