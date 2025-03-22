import { Button } from "@/components/ui/button";
import flameIcon from "@/public/flame-icon.svg";
import Image from "next/image";

export default function BadgeHot({ className = "" }) {
  return (
    <Button
      variant="icon"
      className={`bg-gradient-to-b from-[#ED1C24] to-[#871015] rounded-full text-white pointer-events-none cursor-none ${className}`}
    >
      <Image src={flameIcon} />
      Hot
    </Button>
  );
}
