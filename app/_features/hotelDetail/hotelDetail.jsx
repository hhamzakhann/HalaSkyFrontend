import Image from "next/image";
import { getHotelDetails } from "@/app/_lib/data-service";
import React from "react";
import { HiOutlineShare } from "react-icons/hi";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import ButtonCustom from "../../_components/Button";
import Card from "../../_components/Card";
import Container from "../../_components/Container";
import LikeButton from "../../_components/LikeButton";
import Slider from "../../_components/Slider";
import { TabsContainer } from "./tabsContainer";
import { RoomDetails } from "./roomDetails";

export default async function HotelDetails({ searchParams }) {
  const resData = await getHotelDetails(searchParams);

  const hotel = resData.data.GetHotelDetailsRS.HotelDetailsInfo;

  return (
    <React.Fragment>
      <Container className="!p-0">
        <section className="p-0 md:px-4 md:py-3 relative">
          <div className="flex items-center gap-1 py-8">
            <a className="text-sm text-slate-500 align-center" href="/hotels">
              Hotels
            </a>
            <p className="text-sm text-slate-500 align-center">/</p>
            <p className="text-md">{hotel?.HotelInfo?.HotelName}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="">
              <p className="text-4xl">{hotel?.HotelInfo?.HotelName}</p>
              <div className="flex items-center gap-2 py-4">
                <Image
                  src="/location.svg"
                  alt=""
                  loading="lazy"
                  width={12}
                  height={14}
                />
                <span className="text-sm text-slate-500">
                  {searchParams.selectedHotelAddress}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <LikeButton />
              <ButtonCustom
                variant="icon"
                type="outline"
                className="shadow-lg text-[#05203B] border-[#05203B] border-2 rounded-3xl"
              >
                <HiOutlineShare />
                Share
              </ButtonCustom>
              <ButtonCustom
                variant="icon"
                type="outline"
                className="shadow-lg text-white bg-[#172B85] rounded-3xl"
              >
                <HiOutlineArrowsRightLeft />
                Add to Comparison
              </ButtonCustom>
            </div>
          </div>
          <div>
            <Slider />
          </div>
          <div className="">
            <Card className="px-7 py-7" varient="medium">
              <div className="flex">
                <div className="tabs flex-1">
                  <TabsContainer hotel={hotel} />
                </div>
                <div className="rooms flex-1">
                  <RoomDetails
                    rooms={hotel.HotelRateInfo.Rooms.Room}
                    hotel={hotel}
                    searchParams={searchParams}
                  />
                </div>
              </div>
            </Card>
          </div>
        </section>
      </Container>
    </React.Fragment>
  );
}
