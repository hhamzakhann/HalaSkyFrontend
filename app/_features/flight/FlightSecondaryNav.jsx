import Image from "next/image";
import Container from "@/app/_components/Container";
import FromToIcon from "@/public/fromTo-icon.svg";

export default function FlightSecondaryNav() {
  return (
    <div className="border-b border-slate-200">
      <Container className=" !p-0">
        <div className="grid grid-cols-[1fr_1fr]  md:grid-cols-[1fr_1fr_1fr_2fr_2fr_auto]">
          <div className="search-flight-item px-3 py-2 md:px-4 md:py-3 space-y-2">
            <div className="flex items-center gap-1">
              <img src="/select.svg" />
              <span className="font-normal text-xs">Select Trip</span>
            </div>
            <div className="flex items-center gap-1">
              <select className="w-full focus:outline-none bg-transparent">
                <option>option 1</option>
                <option>option 2</option>
              </select>
            </div>
          </div>
          <div className="search-flight-item px-3 py-2 md:px-4 md:py-3 space-y-2 flight-from">
            <div className="flex items-center gap-1">
              <img src="/airplane.svg" />
              <span className="font-normal text-xs">From</span>
            </div>
            <div className="flex items-center gap-1">
              <span>Jakarta</span>
            </div>
            <div className="fromToIcon-container">
              <Image src={FromToIcon} />
            </div>
          </div>
          <div className="search-flight-item px-3 py-2 md:px-7 md:py-3 space-y-2">
            <div className="flex items-center gap-1">
              <img src="/landing-airplane-icon.svg" />
              <span className="font-normal text-xs">To</span>
            </div>
            <div className="flex items-center gap-1">
              <span>Hanoi</span>
            </div>
          </div>
          <div className="search-flight-item px-3 py-2 md:px-4 md:py-3 space-y-2">
            <div className="flex items-center gap-1">
              <img src="/calender-icon.svg" />
              <span className="font-normal text-xs">Flight Date</span>
            </div>
            <div className="flex items-center gap-1">
              <span>Fri, 29 Aug 2024 - Fri, 29 Aug 2024</span>
            </div>
          </div>
          <div className="search-flight-item px-3 py-2 md:px-4 md:py-3 space-y-2">
            <div className="flex items-center gap-1">
              <img src="/seat-icon.svg" />
              <span className="font-normal text-xs">
                Passenger & Cabin Class
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span>1 Passenger, Economy</span>
            </div>
          </div>
          <div className="search-flight-item  px-3 py-2">
            <div className="bg-accent w-fit p-3 rounded-full">
              <img src="/search-white-icon.svg" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
