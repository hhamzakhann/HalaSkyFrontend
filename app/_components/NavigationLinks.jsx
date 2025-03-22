"use client";

import Link from "next/link";
import SignInButton from "./SignInButton";
import currenyGlobeIcon from "@/public/currency-globe-icon.svg";
import Image from "next/image";
import { useSession } from "next-auth/react";
import BtnSignout from "./actionButtons/BtnSignout";
import { Loader2 } from "lucide-react";
import logoutIcon from "@/public/logout-icon.svg";

export default function NavigationLinks() {
  const { data: session, status } = useSession();

  const isLoggedIn = session?.user;
  return (
    <>
      <ul className="md:flex items-center gap-8 md:text-sm font-light hidden ">
        <li>
          <Link href="/flights">Flight</Link>
        </li>
        <li>
          <Link href="/hotels">Hotel</Link>
        </li>
        <li>
          <Link href="/community">Community</Link>
        </li>
        <li>
          <div className="flex items-center gap-2 divide-x-2">
            <Image src={currenyGlobeIcon} alt="currency globe icon" />
            <span className="pl-2">USD</span>
          </div>
        </li>
        <li>
          {status === "loading" ? (
            <Loader2 />
          ) : isLoggedIn ? (
            <BtnSignout redirect="/">
              Log out
              <Image src={logoutIcon} />
            </BtnSignout>
          ) : (
            <Link href="/login" className="bg-accent p-4 rounded-full">
              Sign in
            </Link>
          )}
        </li>
      </ul>
    </>
  );
}
