"use client";

import { useHotelStore } from "@/store/useHotelStore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HotelPricing from "../_features/hotels/HotelPricing";
import Rating from "./Rating";
import ShareButton from "./ShareButton";
import BadgeHot from "./UI/BadgeHot";

export default function HotelsCard({ hotel }) {
  const router = useRouter();
  const { HotelInfo, HotelRateInfo, HotelImageInfo } = hotel;
  const setHotel = useHotelStore((s) => s.setHotel);
  const {
    RateInfos: { ConvertedRateInfo },
  } = HotelRateInfo;

  const sendToServer = async () => {
    setHotel(hotel);
    router.push(`/hotelDetail`);
  };

  let amountAfterTax = undefined;
  let currencyCode = undefined;

  if (
    ConvertedRateInfo[0]?.AmountAfterTax ||
    ConvertedRateInfo[0]?.CurrencyCode
  ) {
    amountAfterTax = ConvertedRateInfo[0].AmountAfterTax;
    currencyCode = ConvertedRateInfo[0].CurrencyCode;
  }
  const {
    Address: { AddressLine1 = "", CityName = "", CountryName = "" },
  } = HotelInfo.LocationInfo;
  const address = `${AddressLine1}, ${CityName.value}, ${CountryName.value}`;
  return (
    <figure className="relative" onClick={sendToServer}>
      <div className="absolute w-[95%] top-4 left-1/2 -translate-x-[50%] testt flex items-center justify-between z-10">
        <BadgeHot />
        <div className="space-x-3">
          <ShareButton />
          {/* <LikeButton /> */}
        </div>
      </div>
      <div className="relative w-full aspect-square">
        {HotelImageInfo?.ImageItem?.Image?.Url || HotelInfo?.Logo ? (
          <Image
            src={HotelImageInfo?.ImageItem?.Image?.Url || HotelInfo?.Logo}
            fill
            className="object-cover"
            alt="Trending hotel image"
            loading="lazy"
          />
        ) : (
          ""
        )}
      </div>
      <figcaption className="py-4 space-y-2 relative">
        <div className="text-xl font-normal md:text-sm lg:text-xl max-w-[80%]">
          {HotelInfo.HotelName}
        </div>
        <div className="text-sm font-normal text-slate-500 flex items-center gap-2">
          <Image
            src="/location.svg"
            alt=""
            loading="lazy"
            width={24}
            height={24}
          />
          <span className="md:text-xs lg:text-sm">{address}</span>
        </div>
        {amountAfterTax && (
          <div className="space-y-1">
            <div className="font-normal text-xs">Starting from</div>

            <HotelPricing price={amountAfterTax} CurrencyCode={currencyCode} />
          </div>
        )}
        <Rating
          className="absolute top-2 right-0"
          rate={HotelInfo.SabreRating}
        />
      </figcaption>
    </figure>
  );
}
