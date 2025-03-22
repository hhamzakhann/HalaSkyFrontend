import Image from "next/image";
import { spartanFont } from "../font";

export default function Media({ icon, title, number }) {
  return (
    <div className={`flex items-center gap-3 ${spartanFont.className}`}>
      {icon ? (
        <div className="w-14 h-14 rounded-full border border-slate-600 flex items-center justify-center">
          <Image src={icon} />
        </div>
      ) : (
        <div className="w-14 h-14 bg-slate-400 rounded-full"></div>
      )}

      <div className="space-y-1">
        <h2 className="font-light text-sm">{title}</h2>
        <p className="font-semibold text-4xl">{number}</p>
      </div>
    </div>
  );
}
