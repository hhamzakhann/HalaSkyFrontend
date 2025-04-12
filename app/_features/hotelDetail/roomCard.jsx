import { useHotelStore } from "@/store/useHotelStore";
import { PiWarningCircleLight } from "react-icons/pi";

export const RoomCard = ({ room }) => {
  const setRoom = useHotelStore((s) => s.setRoom);

  const setSelectedRoom = () => {
    setRoom(room);
  };

  return (
    <>
      <div
        onClick={setSelectedRoom}
        className="flex items-center justify-between bg-white rounded-2xl shadow-md px-4 py-4 hover:cursor-pointer hover:border-2 hover:border-[#15193C]"
      >
        <div className="">
          <p className="text-xs text-[#808080]">{room.RoomType}</p>
          <div className="py-3">
            <span className="text-lg text=[#1A1A1A] font-normal">{`${room.RatePlans.RatePlan[0].ConvertedRateInfo.AverageNightlyRate}`}</span>
            <span className="text-sm text=[#1A1A1A] font-normal">
              {" "}
              / Per Day
            </span>
          </div>
        </div>
        <div className="icons">1</div>
        <div className="persons">
          <div className="flex flex-col items-end gap-3">
            <PiWarningCircleLight />
            <p className="text-sm text=[#1A1A1A] font-normal">2 Persons</p>
          </div>
        </div>
      </div>
    </>
  );
};
