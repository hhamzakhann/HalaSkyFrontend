import { useHotelStore } from "@/store/useHotelStore";
import { useEffect, useState } from "react";
import { Filter } from "./filter";
import { Rooms } from "./rooms";
import ButtonCustom from "@/app/_components/Button";
import { IoMdArrowForward } from "react-icons/io";

export const RoomDetails = () => {
  const hotel = useHotelStore((s) => s.hotel);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    if (hotel) {
      setRooms(hotel.HotelRateInfo.Rooms.Room);
    }
  }, [hotel]);

  return (
    <>
      <div className="pl-9 h-full">
        <div className="h-full bg-[#F7FAFA] rounded-3xl">
          <div className="p-5">
            <Filter />
            <p className="text-sm text-[#1A1A1A] py-6">Select Room</p>
            <Rooms rooms={rooms ?? []} />
            <div className="py-5">
              <ButtonCustom className="w-full text-black hover:bg-[#FCCD28] bg-[#FCCD28]">
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
