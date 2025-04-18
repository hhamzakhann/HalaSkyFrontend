import ButtonCustom from "@/app/_components/Button";
import Image from "next/image";
import { FaBuilding } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";

export const HotelBookingCard = ({ searchParams, hotel, room }) => {
  return (
    <>
      <div className="bg-white rounded-[20px] mt-5 h-[240px] p-4">
        <div className="grid grid-cols-7 h-full w-full gap-5">
          <div className="flex flex-col items-center col-span-3 h-full col-start-1 col-end-4">
            <Image
              src="/trending-image-1.jpg"
              className="h-[200px]"
              alt=""
              loading="lazy"
              width={392}
              height={10}
            />
          </div>
          <div className="col-span-4 col-start-4 col-end-8 flex flex-col justify-around">
            <div className="flex items-start gap-3">
              <div className="flex items-center gap-2 flex-1">
                <div className="flex items-center justify-center rounded-3xl bg-[#172B85] text-[#FCCD27] w-[36px] h-[36px]">
                  <FaBuilding />
                </div>
                <div>
                  <p className="text-xs text-[#808080]">Hotel Name</p>
                  <p className="text-sm text-[#1A1A1A]">
                    {hotel?.HotelInfo?.HotelName}
                  </p>
                </div>
              </div>
              <div className="flex justify-end flex-1">
                <ButtonCustom className="text-white bg-[#172B85] rounded-xl">
                  <MdOutlineDeleteForever />
                  Remove
                </ButtonCustom>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <p className="text-xs text-[#808080]">Hotel Location</p>
                <p className="text-sm text-[#1A1A1A]">
                  {searchParams?.selectedHotelAddress}
                </p>
              </div>
              <div className="flex-1">
                <p className="text-xs text-[#808080]">Room Type</p>
                <p className="text-sm text-[#1A1A1A]">{room?.RoomType}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <p className="text-xs text-[#808080]">Check In</p>
                <p className="text-sm text-[#1A1A1A]">
                  {new Date(searchParams?.checkIn).toLocaleDateString("en-GB", {
                    weekday: "short",
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
                <p className="text-sm text-[#1A1A1A]">00:10pm</p>
              </div>
              <div className="flex-1">
                <p className="text-xs text-[#808080]">Check In</p>
                <p className="text-sm text-[#1A1A1A]">
                  {new Date(searchParams?.checkOut).toLocaleDateString(
                    "en-GB",
                    {
                      weekday: "short",
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    }
                  )}
                </p>
                <p className="text-sm text-[#1A1A1A]">00:10pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
