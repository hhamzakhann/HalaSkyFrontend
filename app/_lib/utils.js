import { airlineShortCode } from "./airlineShortCodes";

export function formatDate(date) {
  return new Intl.DateTimeFormat("en-US").format(new Date(date));
}

export function formatCurr(amount, currencyCode, locale) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode,
  }).format(amount);
}

export function getAirportInfo(cityCode) {
  return airlineShortCode.find((info) => info.code === cityCode);
}

export function transformData(data) {
  return {
    destinationList: data.destinationList.map((dest) => ({
      travelDate: dest.travelDate,
      DepartureAirport: dest.DepartureAirport.code,
      ArrivalAirport: dest.ArrivalAirport.code,
    })),
    passengerList: data.passengerList,
  };
}
