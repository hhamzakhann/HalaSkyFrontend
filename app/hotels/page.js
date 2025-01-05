import Navigation from "@/app/_components/Navigation";
import Image from "next/image";
import Container from "../_components/Container";
import { SelectShadecn } from "../_components/formControls";
import map1 from "@/public/map-1.png";

import SidebarFilter from "../_features/flight/SidebarFilter";
import StarRating from "../_components/StarRating";
import PricingFilter from "../_components/PricingFilter";
import HotelServiceList from "../_features/hotels/HotelServiceList";
import HotelsCard from "../_components/HotelsCard";
import Card from "../_components/Card";
import SecondaryNav from "../_features/hotels/SecondaryNav";

export const metadata = {
  title: "Hotels",
};

export default function Page() {
  return (
    <div className="bg-[#F7FAFA] min-h-[100vh]">
      <div className="border-b border-slate-200 bg-[#F7FAFA]">
        <Navigation varient="main-nav" secondaryNav={<SecondaryNav />} />
      </div>

      <Container className="!p-0">
        <section className="p-0 md:px-4 md:py-3 relative">
          <div className="grid grid-cols-1 md:grid-cols-[350px_1fr_1fr] gap-10">
            <SidebarFilter>
              <StarRating
                size={20}
                label="Rating"
                labelClass="font-medium text-xs text-gray mb-2"
              />
              <PricingFilter />
              <HotelServiceList />
            </SidebarFilter>

            <div>
              <p className="mb-2 text-sm font-medium">24 Result Found</p>
              <div className="space-y-8">
                <Card varient="medium">
                  <HotelsCard />
                </Card>
                <Card varient="medium">
                  <HotelsCard />
                </Card>
                <Card varient="medium">
                  <HotelsCard />
                </Card>
              </div>
            </div>
            <div>
              <div className="mb-2 text-sm font-normal flex items-center justify-end gap-1">
                <div className=" text-gray">Sort by:</div>
                <SelectShadecn
                  options={[{ label: "Highest", value: "highest" }]}
                  placeholder="select option"
                  className="w-fit"
                />
              </div>
              <Image src={map1} alt="map" className="w-full" />
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
