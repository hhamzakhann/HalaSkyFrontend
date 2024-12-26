import Image from "next/image";

import Logo from "@/app/_components/Logo";
import Container from "./Container";
import NavigationLinks from "@/app/_components/NavigationLinks";
import Link from "next/link";
import SignInButton from "./SignInButton";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen mb-20">
      <Image
        fill
        className="object-cover -z-10"
        src="/hero-image.png"
        alt="Mountains and forests with two cabins"
      />
      <Container>
        <header className="flex items-center justify-between py-4 px-6">
          <Link href="/" className="flex items-center gap-4 z-10">
            <img src="/main-logo.svg" alt="The Halasky logo" />
          </Link>
          <ul className="md:flex items-center gap-8 md:text-sm text-white font-light hidden ">
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
              <SignInButton />
            </li>
          </ul>
        </header>
      </Container>
      <main>
        <h1 className=" text-3xl w-full  text-primary-50 tracking-wider font-normal text-white absolute top-1/3 left-1/2 -translate-y-2/4 -translate-x-2/4 text-center font-spartan sm:text-4xl md:text-6xl">
          Travel Made Easy: Flights <br />& Hotels in One Place
        </h1>
      </main>
    </section>
  );
}
