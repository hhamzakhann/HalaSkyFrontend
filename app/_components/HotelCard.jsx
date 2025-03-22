import Image from "next/image";
import Rating from "./Rating";
import LikeButton from "./LikeButton";
import ShareButton from "./ShareButton";
import BadgeHot from "./UI/BadgeHot";
import HotelPricing from "../_features/hotels/HotelPricing";
import tempImage from "@/public/trending-image-2.jpg";

export default function HotelsCard() {
  return (
    <figure className="relative">
      <div className="absolute w-[95%] top-4 left-1/2 -translate-x-[50%]   flex items-center justify-between z-10">
        <BadgeHot />
        <div className="space-x-3">
          <ShareButton />
          <LikeButton />
        </div>
      </div>
      <div className="relative w-full aspect-square ">
        <Image src={tempImage} fill />
      </div>
      <figcaption className="py-4 space-y-2 relative">
        <div className="text-xl font-normal md:text-sm lg:text-xl max-w-[80%]">
          Hotel Name
        </div>
        <div className="text-sm font-normal text-slate-500 flex items-center gap-2">
          <img src="/location.svg" />
          <span className="md:text-xs lg:text-sm">Hotel Address</span>
        </div>
        <div className="space-y-1">
          <div className="font-normal text-xs">Starting from</div>

          <HotelPricing price={123123} CurrencyCode={"USD"} />
        </div>
        <Rating className="absolute top-2 right-0" />
      </figcaption>
    </figure>
  );
}
