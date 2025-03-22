import Image from "next/image";

import Logo from "@/app/_components/Logo";
import Container from "./Container";
import NavigationLinks from "@/app/_components/NavigationLinks";
import Link from "next/link";
import SignInButton from "./SignInButton";
import Navigation from "./Navigation";
import { playfairFont } from "../font";
import MainFilter from "./MainFilter";

export default function HeroSection() {
  return (
    <section className="relative  p-6">
      <Image
        fill
        className="object-cover -z-10"
        src="/hero-image.png"
        alt="Mountains and forests with two cabins"
      />
      <Container className="h-full px-0">
        <div className="flex flex-col min-h-[500px]">
          <h1
            className={`w-full text-center lg:text-left  text-primary-50 tracking-wider font-normal text-white flex flex-col ${playfairFont.className} mb-6  md:my-16 sm:mb-0`}
          >
            <span className="font-extrabold text-4xl mb-3 md:mb-12 md:text-[84px]">
              Travel Made Easy:{" "}
            </span>
            <span className="font-extrabold text-2xl md:text-5xl">
              Flights and Hotels in One Place
            </span>
          </h1>
          <div className="mt-auto">
            <MainFilter />
          </div>
        </div>
      </Container>
    </section>
  );
}
