import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import emiratesImage from "@/public/emirates-image.png";
import Image from "next/image";

export default function AirlineInfo({ children }) {
  return (
    <div className="px-3 p-2 rounded-full bg-[#005F730D]">
      <div className="flex items-center gap-3">
        <Avatar>
          <Image src={emiratesImage} alt="emirates image icon" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-normal text-sm">Emirates Airlines</p>
          <div className="flex items-center gap-2">
            <span className="text-xs font-normal">Ea-764</span>
            <span>&bull;</span>
            <span className="text-xs font-medium">Economy</span>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
