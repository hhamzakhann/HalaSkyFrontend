import HeroSection from "@/app/_components/HeroSection";
import TrendingHotels from "@/app/_components/TrendingHotels";
import TrendingDestinations from "@/app/_components/TrendingDestinations";
import SectionInspiration from "@/app/_components/SectionInspiration";
import SectionTreasure from "@/app/_components/SectionTreasure";
import PollSection from "./_components/PollSection";
import CallToAppSection from "./_components/CallToAppSection";
import Footer from "./_components/Footer";

export default function Page() {
  return (
    <>
      <HeroSection />
      <TrendingHotels />
      <TrendingDestinations />
      <SectionInspiration />
      <SectionTreasure />
      <PollSection />
      <CallToAppSection />
      <Footer />
    </>
  );
}
