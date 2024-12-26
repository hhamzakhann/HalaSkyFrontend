import Card from "@/app/_components/Card";
import FlightFacilitiesList from "@/app/_features/flight/FlightFacilitiesList";
import PricingFilter from "@/app/_components/PricingFilter";
import TransitList from "@/app/_components/TransitList";
import ButtonCustom from "@/app/_components/Button";

export default function FlightFilter() {
  return (
    <div>
      <div className="flex items-center justify-between text-xs mb-2">
        <span>Filter</span>
        <span className="text-gray underline">Reset Filter</span>
      </div>
      <Card varient="large" className="absolute top-0 md:static space-y-10">
        <TransitList />
        <PricingFilter />
        <FlightFacilitiesList />
        <ButtonCustom varient="secondary" shape="round">
          Apply Now
        </ButtonCustom>
      </Card>
    </div>
  );
}
