import UserInfo from "../_features/users/UserInfo";
import Logo from "./Logo";
import MenuSidebar from "./MenuSidebar";
import logoutIcon from "@/public/logout-icon.svg";
import Image from "next/image";
import { handleSignOut } from "@/app/_lib/action";

export default function DashboardSidebar() {
  return (
    <div className="py-10 px-8 h-h-full bg-[#F5F7F9] space-y-4 divide-y flex flex-col absolute top-0 -left-full bottom-0 h-full z-20 lg:static">
      <div className="flex items-center justify-between">
        <Logo varient="secondary" className="w-2/3" />
        <form action={handleSignOut}>
          <button type="submit">
            <Image
              src={logoutIcon}
              alt="logout icon"
              className="cursor-pointer"
            />
          </button>
        </form>
      </div>
      <MenuSidebar />
      <div className="pt-4 mt-auto">
        <UserInfo />
      </div>
    </div>
  );
}
