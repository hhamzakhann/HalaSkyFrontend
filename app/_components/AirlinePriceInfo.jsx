import ButtonCustom from "@/app/_components/Button";
import { convertCurr } from "../_lib/action";
import { formatCurr } from "../_lib/utils";

export default function AirlinePriceInfo({ className, flight }) {
  const { currency, totalAmount } = flight.passengerPriceDetail.reduce(
    (totalUserfare, currPassenger) => {
      return {
        ...totalUserfare,
        currency: currPassenger?.totalFareDetail?.currency,
        totalAmount:
          totalUserfare.totalAmount +
          currPassenger?.totalFareDetail?.totalPrice,
      };
    },
    { currency: "", totalAmount: 0 }
  );

  console.log("NET AMOUNT", totalAmount);

  const userCurrency =
    flight.passengerPriceDetail[0].totalFareDetail.equivalentCurrency;

  const startingAmount = formatCurr(
    totalAmount,
    userCurrency,
    navigator.language
  );

  return (
    <div
      className={`p-2 pl-8 rounded-full bg-white flex items-center gap-9 ${className}`}
    >
      <div className="w-full">
        <p className="font-normal text-xs">Starting from</p>
        <p>
          <span className="font-medium text-xl">{startingAmount}</span>
          <span className="font-normal text-xs">/Tax</span>
        </p>
      </div>
      <ButtonCustom
        type="accent"
        shape="circle"
        size="large"
        className="!border !border-blueDark h-10 w-16 rounded-full"
      >
        &rarr;
      </ButtonCustom>
    </div>
  );
}
