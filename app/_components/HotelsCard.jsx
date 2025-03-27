import Image from "next/image";
import Rating from "./Rating";
import LikeButton from "./LikeButton";
import ShareButton from "./ShareButton";
import BadgeHot from "./UI/BadgeHot";
import HotelPricing from "../_features/hotels/HotelPricing";

export default function HotelsCard({ hotel }) {
  const { HotelInfo, HotelRateInfo, HotelImageInfo } = hotel;
  const {
    RateInfos: { ConvertedRateInfo },
  } = HotelRateInfo;

  // const { ImageItem } = HotelImageInfo;
  // const {
  //   Image: { Url },
  // } = ImageItem;

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
    <figure className="relative">
      <div className="absolute w-[95%] top-4 left-1/2 -translate-x-[50%]   flex items-center justify-between z-10">
        <BadgeHot />
        <div className="space-x-3">
          <ShareButton />
          {/* <LikeButton /> */}
        </div>
      </div>
      <div className="relative w-full aspect-square">
        {HotelImageInfo?.ImageItem?.Image?.Url ? (
          <Image
            src={HotelImageInfo?.ImageItem?.Image?.Url}
            fill
            className="object-cover"
            alt="Trending hotel image"
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
          <img src="/location.svg" />
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
