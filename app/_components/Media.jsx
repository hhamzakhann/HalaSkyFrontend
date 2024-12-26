import { spartanFont } from "../font";

export default function Media({ title, number }) {
  return (
    <div className={`flex items-center gap-3 ${spartanFont.className}`}>
      <div className="w-14 h-14 bg-slate-400 rounded-full"></div>
      <div className="space-y-1">
        <h2 className="font-light text-sm">{title}</h2>
        <p className="font-semibold text-4xl">{number}</p>
      </div>
    </div>
  );
}
