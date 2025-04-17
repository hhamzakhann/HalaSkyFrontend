"use client";

import ButtonCustom from "@/app/_components/Button";
import Container from "@/app/_components/Container";
import { Input } from "@/components/ui/input";
import { useHotelStore } from "@/store/useHotelStore";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { HotelBookingCard } from "./hotelBookingCard";
import { PaymentDetailCard } from "./paymentDetailCard";

export const Booking = ({ searchParams }) => {
  const { room, hotel } = useHotelStore();
  const [active, setActive] = useState(1);
  const router = useRouter();

  const backToHotel = useCallback(() => {
    console.log(`222222222222222`, room);
    console.log(`333333333333333`, hotel);
    if (!room || !hotel) {
      router.push(`/hotels?${new URLSearchParams(searchParams)}`);
    }
  }, [room, hotel, router, searchParams]);

  useEffect(() => {
    backToHotel();
  }, [backToHotel, room, router]);

  return (
    <React.Fragment>
      <Container className="!p-0">
        <section className="p-0 md:px-4 md:py-3 relative">
          <div className="grid grid-cols-8 gap-6 mt-5">
            <div className="col-span-6 col-start-1 col-end-7">
              <div className="flex items-center gap-4 w-full border-b-2 border-b-[#DCDFDF] pb-3">
                <div
                  className={`${
                    active === 1 ? "text-xl font-semibold" : "text-base"
                  } text-[#1A1A1A] place-self-center`}
                >
                  Booking Detail
                </div>
                <div
                  className={`${
                    active === 2 ? "text-xl font-semibold" : "text-base"
                  } text-[#1A1A1A] place-self-center`}
                >
                  Payment
                </div>
              </div>
              {active === 1 ? (
                <HotelBookingCard
                  searchParams={searchParams}
                  hotel={hotel}
                  room={room}
                />
              ) : null}
              {active === 2 ? <PaymentDetailCard /> : null}
            </div>
            <div className="col-span-2 col-start-7 col-end-9">
              <div className="flex items-cnter w-full pb-4">
                <p className="text-sm font-medium text-[#1A1A1A] place-self-center">
                  Summary
                </p>
              </div>
              <div
                className={`rounded-[20px] px-9 py-5 ${
                  active === 1
                    ? "bg-[#06203B] h-[370px]"
                    : "bg-[#FFFFFF] h-[240px]"
                }`}
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    {active === 1 && (
                      <div>
                        <Input
                          className="bg-[#374D62] border-[#F7FAFA1A] rounded-xl text-white h-[41px]"
                          placeholder="Enter Promo Code"
                        />
                      </div>
                    )}
                    <div className="flex items-center justify-between mt-5">
                      <p
                        className={`${
                          active === 1 ? "text-white" : "text-[#808080]"
                        } text-xs`}
                      >
                        Sub Total
                      </p>
                      <p
                        className={`${
                          active === 1 ? "text-white" : "text-[#808080]"
                        } text-xs`}
                      >
                        {`$ ${room?.RatePlans?.RatePlan[0]?.ConvertedRateInfo?.AmountBeforeTax}`}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-5">
                      <p
                        className={`${
                          active === 1 ? "text-white" : "text-[#808080]"
                        } text-xs`}
                      >
                        Tax
                      </p>
                      <p
                        className={`${
                          active === 1 ? "text-white" : "text-[#808080]"
                        } text-xs`}
                      >
                        {`$ ${room?.RatePlans?.RatePlan[0]?.ConvertedRateInfo?.Taxes?.Amount}`}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-5">
                      <p
                        className={`${
                          active === 1 ? "text-white" : "text-[#808080]"
                        } text-xs`}
                      >
                        Discount
                      </p>
                      <p className="text-xs text-[#FF6363]">$ 0</p>
                    </div>
                    <div className="flex items-center justify-between mt-5">
                      <p
                        className={`${
                          active === 1 ? "text-white" : "text-[#808080]"
                        } text-sm font-semibold`}
                      >
                        Total
                      </p>
                      <p
                        className={`${
                          active === 1 ? "text-white" : "text-[#808080]"
                        } text-sm font-semibold`}
                      >
                        {`$ ${room?.RatePlans?.RatePlan[0]?.ConvertedRateInfo?.ApproxTotalPrice}`}
                      </p>
                    </div>
                  </div>
                  <div>
                    <ButtonCustom
                      className={`w-full bg-[#FCCD27] text-[#15193C] hover:bg-[#FCCD27] ${
                        active === 2 ? "mt-3" : ""
                      }`}
                      onClick={() => setActive(2)}
                    >
                      Next
                    </ButtonCustom>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </React.Fragment>
  );
};
