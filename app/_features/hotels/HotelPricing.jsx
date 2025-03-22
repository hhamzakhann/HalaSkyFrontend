"use client";
import { formatCurr } from "@/app/_lib/utils";
import { useEffect, useState } from "react";

export default function HotelPricing({ price, CurrencyCode }) {
  const [locale, setLocale] = useState("en-Us"); // Default locale

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      setLocale(navigator.language);
    }
  }, []);
  return (
    <div className="font-normal text-xl">
      {formatCurr(price, CurrencyCode, locale)}
    </div>
  );
}
