import buildingIcon from "@/public/building-icon.svg";
import calenderIcon from "@/public/calender-icon.svg";
import adultsIcon from "@/public/adults-icon.svg";
import {
  DatePickerWithRange,
  SelectShadecn,
} from "@/app/_components/formControls";
import Container from "@/app/_components/Container";
import Image from "next/image";

export default function SecondaryNav() {
  return (
    <div className="border-b border-slate-200">
      <Container className=" !p-0">
        <div className="grid grid-cols-[1fr_1fr]  md:grid-cols-[1fr_1fr_1fr_2fr_2fr_auto]">
          <div className="search-flight-item px-3 py-2 md:px-4 md:py-3 col-span-3">
            <div className="flex items-center gap-1">
              <Image src={buildingIcon} alt="building icon" />
              <span className="font-normal text-xs text-gray">
                Select Destination
              </span>
            </div>
            <div className="flex items-center gap-1">
              <SelectShadecn
                placeholder="Select Destination here"
                options={[{ label: "Islamabad, Pakistan", value: "ISB" }]}
              />
            </div>
          </div>
          <div className="search-flight-item px-3 py-2 md:px-4 md:py-3">
            <div className="flex items-center gap-1">
              <Image src={calenderIcon} alt="calender icon" />
              <span className="font-normal text-xs text-gray">Date</span>
            </div>
            <DatePickerWithRange />
          </div>
          <div className="search-flight-item px-3 py-2 md:px-4 md:py-3 ">
            <div className="flex items-center gap-1">
              <Image src={adultsIcon} alt="adults Icon" />
              <span className="font-normal text-xs text-gray">
                Adult & Childrens
              </span>
            </div>
            <div className="flex items-center gap-1">
              <SelectShadecn
                placeholder="Select Persons here"
                options={[{ label: "2 Adult, 2 Childrens", value: "2 adults" }]}
              />
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
