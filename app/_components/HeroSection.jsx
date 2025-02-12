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
    <section className="relative hero-section p-6">
      <Image
        fill
        className="object-cover -z-10"
        src="/hero-image.png"
        alt="Mountains and forests with two cabins"
      />
      <Container className="h-full">
        <div className="flex flex-col h-full">
          <h1
            className={`w-full  text-primary-50 tracking-wider font-normal text-white flex flex-col ${playfairFont.className}`}
          >
            <span className="font-extrabold text-7xl">Travel Made Easy: </span>
            <span className="font-extrabold text-5xl">
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
