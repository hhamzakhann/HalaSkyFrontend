import { cookies } from "next/headers";
import Container from "@/app/_components/Container";
import FlightSecondaryForm from "./FlightSecondaryForm";

export default function FlightSecondaryNav() {
  const cookiesData = cookies();
  const formData = cookiesData.get("formData")?.value;
  const {
    destinationList,
    passengerList,
    selectedArrivalLocation,
    selectedDepartureLocation,
    ticketType,
    returnDate
  } = JSON.parse(formData || "{}");

  return (
    <div className="border-b border-slate-200">
      <Container className=" !p-0">
        <FlightSecondaryForm
          destinationList={destinationList}
          passengerList={passengerList}
          selectedArrivalLocation={selectedArrivalLocation}
          selectedDepartureLocation={selectedDepartureLocation}
          ticketType={ticketType}
          returnDate={returnDate}
        />
      </Container>
    </div>
  );
}
