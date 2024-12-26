"use client";
import Link from "next/link";
import SignInButton from "./SignInButton";

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
          <SignInButton varient="accent" />
        </li>
      </ul>
    </>
  );
}
