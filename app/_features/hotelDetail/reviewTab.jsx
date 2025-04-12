import StarRating from "@/app/_components/StarRating";
import { useHotelStore } from "@/store/useHotelStore";

export const ReviewTab = ({ selectedTab }) => {
  const hotel = useHotelStore((s) => s.hotel);
  return (
    <>
      {selectedTab === 3 && (
        <div className="tabPane py-5 flex items-center gap-4">
          <StarRating
            defaultRating={parseFloat(hotel.HotelInfo.SabreRating)}
            color="#172B85"
            label=""
            labelClass="font-medium text-xs text-gray mb-2"
            isReview={true}
            size={40}
          />
          <p className="text-3xl">{hotel.HotelInfo.SabreRating}</p>
        </div>
      )}
    </>
  );
};
