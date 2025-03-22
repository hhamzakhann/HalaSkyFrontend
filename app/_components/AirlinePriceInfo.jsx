import ButtonCustom from "@/app/_components/Button";
import { convertCurr } from "../_lib/action";
import { formatCurr } from "../_lib/utils";

export default function AirlinePriceInfo({ className, flight }) {
  const { currency, totalAmount } = flight.passengerPriceDetail
    .flatMap((detail) => detail.passengerList)
    .reduce(
      (totalUserfare, currPassenger, indx) => {
        if (indx === 0)
          return {
            ...totalUserfare,
            currency: currPassenger.passengerTotalFare.currency,
          };
        return {
          ...totalUserfare,
          totalAmount: currPassenger.passengerTotalFare.totalFare,
        };
      },
      { currency: "", totalAmount: 0 }
    );

  const amount = flight.passengerPriceDetail.reduce(
    (totalAmount, currAmount) =>
      (totalAmount += currAmount.totalFareDetail.totalPrice),
    0
  );

  // convertCurr(currency, undefined, totalAmount);

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
