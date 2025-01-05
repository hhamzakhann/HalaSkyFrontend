import Image from "next/image";

import planeGrayIcon from "@/public/plane-gray-icon.svg";

export default function SearchFlightDetail() {
  return (
    <div className="py-8">
      <div>
        <div>
          <p>
            <Image src={planeGrayIcon} alt="depart plane icon" />
            <span>From</span>
          </p>
          <p>Jakarta</p>
          <p>
            <span>Sun, 20 Aug</span>
            <span>&bull;</span>
            <span>08:35</span>
          </p>
        </div>
      </div>
    </div>
  );
}
