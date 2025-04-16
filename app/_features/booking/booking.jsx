"use client";

import ButtonCustom from "@/app/_components/Button";
import Container from "@/app/_components/Container";
import { Input } from "@/components/ui/input";
import { useHotelStore } from "@/store/useHotelStore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { FaBuilding } from "react-icons/fa";

export const Booking = () => {
  const room = useHotelStore((s) => s.room);
  const [active, setActive] = useState(1);
  const router = useRouter();

  const backToHotel = useCallback(() => {
    console.log(`222222222222222`, room);
    if (!room) {
      router.push("/hotels");
    }
  }, [room, router]);

  useEffect(() => {
    if (!room) {
      router.push("/hotels");
    }
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
              <div className="bg-white rounded-[20px] mt-5 h-[240px] p-4">
                <div className="grid grid-cols-7 h-full w-full gap-5">
                  <div className="flex flex-col content-center col-span-3 h-full col-start-1 col-end-4">
                    <Image
                      src="/trending-image-1.jpg"
                      className="h-[200px]"
                      alt=""
                      loading="lazy"
                      width={392}
                      height={10}
                    />
                  </div>
                  <div className="col-span-2 col-start-4 col-end-6">
                    <div className="flex flex-col justify-center w-full h-full gap-5">
                      <div className="flex flex-col content-start w-full">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center justify-center rounded-3xl bg-[#172B85] text-[#FCCD27] w-[36px] h-[36px]">
                            <FaBuilding />
                          </div>
                          <div>
                            <p className="text-xs text-[#808080]">Hotel Name</p>
                            <p className="text-sm text-[#1A1A1A]">Test Hotel</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <p className="text-xs text-[#808080]">Hotel Location</p>
                        <p className="text-sm text-[#1A1A1A]">Test Hotel</p>
                      </div>
                      <div className="w-full">
                        <p className="text-xs text-[#808080]">Check In</p>
                        <p className="text-sm text-[#1A1A1A]">Test Hotel</p>
                        <p className="text-sm text-[#1A1A1A]">Test Hotel</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 col-start-6 col-end-8">
                    asdv sfdvs dfvdsfvsdfv sdfvsdf vs fdv
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 col-start-7 col-end-9">
              <div className="flex items-cnter w-full pb-4">
                <p className="text-sm font-medium text-[#1A1A1A] place-self-center">
                  Summary
                </p>
              </div>
              <div className="rounded-[20px] h-[370px] bg-[#06203B] px-9 py-5">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div>
                      <Input
                        className="bg-[#374D62] border-[#F7FAFA1A] rounded-xl text-white h-[41px]"
                        placeholder="Enter Promo Code"
                      />
                    </div>
                    <div className="flex items-center justify-between mt-5">
                      <p className="text-white text-xs">Sub Total</p>
                      <p className="text-white text-xs">$123456</p>
                    </div>
                    <div className="flex items-center justify-between mt-5">
                      <p className="text-white text-xs">Tax</p>
                      <p className="text-white text-xs">$123456</p>
                    </div>
                    <div className="flex items-center justify-between mt-5">
                      <p className="text-white text-xs">Discount</p>
                      <p className="text-white text-xs text-[#FF6363]">
                        $123456
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-5">
                      <p className="text-white text-sm font-semibold">Total</p>
                      <p className="text-white text-xs font-semibold">
                        $123456
                      </p>
                    </div>
                  </div>
                  <div>
                    <ButtonCustom className="w-full bg-[#FCCD27] text-[#15193C] hover:bg-[#FCCD27]">
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
