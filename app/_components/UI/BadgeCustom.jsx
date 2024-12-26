import { spartanFont } from "@/app/font";

export default function BadgeCustom({ children, className }) {
  return (
    <span
      className={`px-3 py-1 bg-lightGray rounded-lg inline-flex items-center gap-2 ${spartanFont.className} font-normal text-sm ${className}`}
    >
      {children}
    </span>
  );
}
