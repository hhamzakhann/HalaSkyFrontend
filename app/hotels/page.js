import Navigation from "@/app/_components/Navigation";
import map1 from "@/public/map-1.png";
import Image from "next/image";
import Container from "../_components/Container";
import { SelectShadecn } from "../_components/formControls";

import { Suspense } from "react";
import HotelSidebarFilter from "../_components/HotelSidebarFilter";
import Message from "../_components/UI/Message";
import { HotelCardSkeleton } from "../_features/hotels/HotelCardSkeleton";
import Hotels from "../_features/hotels/Hotels";
import SecondaryNav from "../_features/hotels/SecondaryNav";

export const metadata = {
  title: "Hotels",
};

export default async function Page({ searchParams }) {
 
  const { cityCode, countryCode, checkIn, checkout, adult, children } =
    searchParams;


    

  return (
    <div className="bg-[#F7FAFA] min-h-[100vh]">
      <div className="border-b border-slate-200 bg-[#F7FAFA] sticky top-0 left-0 right-0 w-full z-50">
        <Navigation
          varient="main-nav"
          secondaryNav={
            <SecondaryNav
              defaultData = {...searchParams}
              defaultDates={{
                from: checkIn || new Date(),
                to: checkout || new Date(),
              }}
            />
          }
        />
      </div>

      <Container className="!p-0">
        <section className="p-0 md:px-4 md:py-3 relative">
          {Object.keys(searchParams).length !== 0 ? (
            <>
              <div className="grid grid-cols-[400px_1fr_450px] fixed left-1/2 -translate-x-[50%] w-[1360px]">
                <HotelSidebarFilter/>
                <div></div>

                <div className="">
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
              <div className="w-[500px] mx-auto">
                <Suspense fallback={<HotelCardSkeleton />} key={`${cityCode}-${countryCode}-${adult}-${children}-${checkIn}-${checkout}`}>
                  <Hotels searchParamsData={{ ...searchParams }} />
                </Suspense>
              </div>
            </>
          ) : (
            <div className="mt-12">
              <Message>
                <p>
                  👋🏻 There are no hotel to listing here. please use the above
                  filter.
                </p>
              </Message>
            </div>
          )}
        </section>
      </Container>
    </div>
  );
}
