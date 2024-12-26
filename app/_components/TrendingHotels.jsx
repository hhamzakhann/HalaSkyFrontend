import Container from "@/app/_components/Container";
import TrendingHotelsCard from "@/app/_components/TrendingHotelsCard";

export default function TrendingHotels() {
  return (
    <Container>
      <div className="mb-20 md:px-12">
        <h2 className="md:text-2xl md:font-medium mb-10">Trending Hotels</h2>
        <div className="space-y-6 sm:grid sm:grid-cols-2 sm:space-y-0 md:grid-cols-4 gap-4">
          <TrendingHotelsCard />
          <TrendingHotelsCard />
          <TrendingHotelsCard />
          <TrendingHotelsCard />
        </div>
      </div>
    </Container>
  );
}
