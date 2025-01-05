import Image from "next/image";

import planeGrayIcon from "@/public/plane-gray-icon.svg";
import landingPlanIcon from "@/public/landing-plan-icon.svg";
import luggageBagIcon from "@/public/luggageBag-icon.svg";
import { Tag } from "antd";

export default function SearchFlightDetail() {
  return (
    <div className=" w-2/3 mx-auto divide-y">
      <div className="flex items-center justify-between py-8 pt-20">
        <div className="flex flex-col gap-1 items-end">
          <p className="flex items-center gap-2 font-normal text-xs text-gray">
            <Image src={planeGrayIcon} alt="depart plane icon" />
            <span>From</span>
          </p>
          <p className="font-normal text-xl">Jakarta</p>
          <p className="flex items-center gap-2 font-normal text-xs">
            <span className="text-gray">Sun, 20 Aug</span>
            <span className="text-gray">&bull;</span>
            <span>08:35</span>
          </p>
        </div>
        <div className="flex flex-col gap-1 items-start">
          <p className="flex items-center gap-2 font-normal text-xs text-gray">
            <Image src={landingPlanIcon} alt="landing plane icon" />
            <span>To</span>
          </p>
          <p className="font-normal text-xl">Hanoi</p>
          <p className="flex items-center gap-2 font-normal text-xs">
            <span className="text-gray">Sun, 20 Aug</span>
            <span className="text-gray">&bull;</span>
            <span>08:35</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 py-8 font-normal text-sm">
        <p>One Stop</p>
        <div className="basis-52 flex items-center justify-center gap-3">
          <Image src={luggageBagIcon} alt="Luggage bag icon" />
          <span>Total : 20Kg</span>
        </div>
        <Tag bordered={false} color="red" className="text-sm font-normal">
          2 Seats Left
        </Tag>
      </div>
    </div>
  );
}
