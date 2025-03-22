import Container from "@/app/_components/Container";

import TrendingDestinationCard from "@/app/_components/TrendingDestinationCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function TrendingDestinations() {
  return (
    <Container>
      <div className="mb-20 ">
        <h2 className="text-xl font-semibold md:text-2xl md:font-medium mb-10">
          Trending Destinations
        </h2>
        <div>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <div className="flex items-center gap-3 w-full relative">
              <div className="absolute top-0 right-0 -translate-x-[50px] -translate-y-[45px] flex items-center gap-4 min-w-3">
                <CarouselPrevious className=" w-12 h-10" />
                <CarouselNext className=" w-12 h-10" />
              </div>
              <div className="w-full">
                <CarouselContent>
                  <CarouselItem
                    key={1}
                    className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 "
                  >
                    <TrendingDestinationCard />
                  </CarouselItem>
                  <CarouselItem
                    key={2}
                    className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 "
                  >
                    <TrendingDestinationCard />
                  </CarouselItem>
                  <CarouselItem
                    key={3}
                    className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 "
                  >
                    <TrendingDestinationCard />
                  </CarouselItem>
                  <CarouselItem
                    key={4}
                    className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 "
                  >
                    <TrendingDestinationCard />
                  </CarouselItem>
                  <CarouselItem
                    key={5}
                    className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 "
                  >
                    <TrendingDestinationCard />
                  </CarouselItem>
                  <CarouselItem
                    key={5}
                    className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 "
                  >
                    <TrendingDestinationCard />
                  </CarouselItem>
                  <CarouselItem
                    key={5}
                    className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 "
                  >
                    <TrendingDestinationCard />
                  </CarouselItem>
                  <CarouselItem
                    key={5}
                    className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 "
                  >
                    <TrendingDestinationCard />
                  </CarouselItem>
                  <CarouselItem
                    key={5}
                    className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 "
                  >
                    <TrendingDestinationCard />
                  </CarouselItem>
                </CarouselContent>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </Container>
  );
}
