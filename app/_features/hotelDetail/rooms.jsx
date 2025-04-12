import { RoomCard } from "./roomCard";

export const Rooms = ({ rooms }) => {
  return (
    <>
      {rooms &&
        rooms.map((room) => <RoomCard key={room.GuestRoomInfo} room={room} />)}
    </>
  );
};
