import HotelsCard from "@/app/_components/HotelsCard";
import Card from "@/app/_components/Card";
import { getHotels } from "@/app/_lib/data-service";
import Message from "@/app/_components/UI/Message";

export default async function Hotels({ searchParamsData }) {
  const respData = await getHotels(searchParamsData);

  console.log(
    "HOTEL RESP DATA::",
    respData?.data?.GetHotelAvailRS?.HotelAvailInfos?.HotelAvailInfo
  );
  const hotels =
    respData?.data?.GetHotelAvailRS?.HotelAvailInfos?.HotelAvailInfo;
  let displayHotels = [];

  const { rating, minPrice, maxPrice } = searchParamsData;

  if (rating || minPrice || maxPrice) {
    const searchedHotels = hotels
      .filter((hotel) => hotel.HotelInfo.SabreRating == +rating)
      .filter((hotel) => {
        return (
          hotel.HotelRateInfo.RateInfos.ConvertedRateInfo[0].AmountAfterTax >=
            searchParamsData.minPrice &&
          hotel.HotelRateInfo.RateInfos.ConvertedRateInfo[0].AmountAfterTax <=
            searchParamsData.maxPrice
        );
      });

    displayHotels = searchedHotels;
  } else {
    displayHotels = hotels;
  }
  // const hotels = [];

  if (displayHotels.length === 0)
    return (
      <div>
        <Message>👋🏻 No Hotel found for the the search query</Message>
      </div>
    );

  return (
    <div>
      <p className="mb-2 text-sm font-medium">{hotels.length} Result Found</p>
      <div className="space-y-8">
        {displayHotels.map((hotel, index) => (
          <Card varient="medium" key={index}>
            <HotelsCard hotel={hotel} index={index} />
          </Card>
        ))}
      </div>
    </div>
  );
}
