import BtnSignout from "@/app/_components/actionButtons/BtnSignout";
import { auth } from "@/app/_lib/auth";

export default async function UserInfo() {
  const session = await auth();

  const username = session?.user?.name;
  const userEmail = session?.user?.email;
  const userImage = session?.user?.image;
  return (
    <div className="p-4 bg-white rounded-lg flex gap-2 items-center">
      <div className="h-10 w-10">
        <img
          src={userImage}
          alt=""
          className="rounded-full"
          referrerPolicy="no-referrer"
        />
      </div>
      <div>
        <p className="font-spartan font-light text-sm">{username}</p>
        <p className="font-spartan font-light text-sm text-slate-400">
          {userEmail}
        </p>
      </div>
      <BtnSignout redirect="/login/admin">
        <Image src={logoutIcon} alt="logout icon" className="cursor-pointer" />
      </BtnSignout>
    </div>
  );
}
