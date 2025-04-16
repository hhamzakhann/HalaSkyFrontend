"use client";

import ButtonCustom from "@/app/_components/Button";
import { useRouter } from "next/navigation";
import { IoMdArrowForward } from "react-icons/io";
import { Filter } from "./filter";
import { Rooms } from "./rooms";
import { useHotelStore } from "@/store/useHotelStore";

export const RoomDetails = ({ rooms, searchParams }) => {
  const { room } = useHotelStore();
  const router = useRouter();

  const goToBooking = () => {
    if (!room) {
      alert("Select a room");
      return;
    }

    router.push("/booking");
  };

  return (
    <>
      <div className="pl-9 h-full">
        <div className="h-full bg-[#F7FAFA] rounded-3xl">
          <div className="p-5">
            <Filter searchParams={searchParams} />
            <p className="text-sm text-[#1A1A1A] pt-5">Select Room</p>
            <Rooms rooms={rooms ?? []} />
            <div className="">
              <ButtonCustom
                className="w-full text-black hover:bg-[#FCCD28] bg-[#FCCD28]"
                onClick={goToBooking}
              >
                Next
                <IoMdArrowForward />
              </ButtonCustom>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
