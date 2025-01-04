import AirlineInfo from "@/app/_components/AirlineInfo";
import AirlinePriceInfo from "@/app/_components/AirlinePriceInfo";
import Card from "@/app/_components/Card";
import { SearchFlightDetail } from ".";

export default function FlightDetailCard() {
  return (
    <header>
      <Card varient="small">
        <AirlineInfo>
          <AirlinePriceInfo className="ml-auto" />
        </AirlineInfo>
        <SearchFlightDetail />
      </Card>
    </header>
  );
}
