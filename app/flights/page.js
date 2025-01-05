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

export const metadata = {
  title: "Flight",
};

export default function Page() {
  return (
    <div className="bg-[#F7FAFA] min-h-[100vh]">
      <div className="border-b border-slate-200 bg-[#F7FAFA]">
        <Navigation varient="main-nav" secondaryNav={<FlightSecondaryNav />} />
      </div>

      <Container className="!p-0">
        <section className="p-0 md:px-4 md:py-3 relative">
          <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-10">
            <div className="space-y-6">
              <div>
                <ButtonCustom
                  className="w-full mb-3"
                  varient="accent"
                  size="large"
                >
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
                <TransitList />
                <PricingFilter />
                <FlightFacilitiesList />
                <ButtonCustom varient="accent" shape="round">
                  Apply Now
                </ButtonCustom>
              </SidebarFilter>
            </div>
            <div>
              <FlightSearchList />
              <p className="mb-4 text-sm font-medium text-slate-400">
                24 Result Found
              </p>
              <div className="space-y-8">
                <FlightDetailCard />
                <FlightDetailCard />
                <FlightDetailCard />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
