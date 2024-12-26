import Container from "@/app/_components/Container";

import TrendingDestinationCard from "@/app/_components/TrendingDestinationCard";

export default function TrendingDestinations() {
  return (
    <Container>
      <div className="mb-20 md:px-12">
        <h2 className="md:text-2xl md:font-medium mb-10">
          Trending Destinations
        </h2>
        <div className="space-y-6 sm:grid sm:grid-cols-2 sm:space-y-0 md:grid-cols-5 gap-4">
          <TrendingDestinationCard />
          <TrendingDestinationCard />
          <TrendingDestinationCard />
          <TrendingDestinationCard />
          <TrendingDestinationCard />
        </div>
      </div>
    </Container>
  );
}
