import { spartanFont } from "@/app/font";

export default function DashboardHeader({ title = "", children }) {
  return (
    <div className="py-8 px-10 flex items-center gap-4 fixed top-0 w-full lg:w-dashNav bg-white z-10">
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-full bg-slate-200"></div>
        <p className={`font-medium text-3xl ${spartanFont.className}`}>
          {title}
        </p>
      </div>
      {children}
    </div>
  );
}
