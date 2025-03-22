import Image from "next/image";
import Box from "./Box";
import Badge from "./UI/Badge";
import BadgeHot from "./UI/BadgeHot";

export default function TrendingDestinationCard() {
  return (
    <div className="relative">
      <div className="absolute top-4 w-[95%] flex left-1/2 -translate-x-[50%]">
        <BadgeHot />
        <Badge className="ml-auto" variant="primary">
          Reviews (253)
        </Badge>
      </div>
      <div className="absolute top-0 right-0 left-0 h-full bg-gradient-to-t from-[rgba(0,0,0,0.2)] to-transparent flex p-6">
        <div className="mt-auto text-white">
          <p className="font-medium text-2xl">Cairo</p>
          <p className="font-normal text-sm">Pearl Hotel</p>
        </div>
      </div>
      <img
        className="object-cover w-full"
        src="/trending-destination-1.png"
        alt="Trening hotel image"
        fill
      />
    </div>
  );
}
