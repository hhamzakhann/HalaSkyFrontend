"use client";

import Link from "next/link";
import SignInButton from "./SignInButton";
import currenyGlobeIcon from "@/public/currency-globe-icon.svg";
import Image from "next/image";

export default function NavigationLinks() {
  return (
    <>
      <ul className="md:flex items-center gap-8 md:text-sm font-light hidden ">
        <li>
          <Link href="/flights">Flight</Link>
        </li>
        <li>
          <Link href="/hotel">Hotel</Link>
        </li>
        <li>
          <Link href="/account">Community</Link>
        </li>
        <li>
          <div className="flex items-center gap-2 divide-x-2">
            <Image src={currenyGlobeIcon} alt="currency globe icon" />
            <span className="pl-2">USD</span>
          </div>
        </li>
        <li>
          <SignInButton varient="accent" />
        </li>
      </ul>
    </>
  );
}
