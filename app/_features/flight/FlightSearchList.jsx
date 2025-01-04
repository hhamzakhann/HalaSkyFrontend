"use client";
import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "@/app/_components/Card";

export default function FlightSearchList() {
  const [selectedCard, setSelectedCard] = useState(null);
  return (
    <Card varient="medium" className="w-full max-w-5xl mx-auto mb-8">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <div className="flex items-center gap-3 w-full">
          <CarouselPrevious className="!static  translate-y-0 w-12 h-10" />

          <div className="grow">
            <CarouselContent className="divide-x">
              {Array.from({ length: 9 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6 pl-2 pr-2"
                >
                  <div
                    className={`cursor-pointer transition-all px-3 py-2 text-center text-base font-normal ${
                      selectedCard === index
                        ? "bg-blueDark2 text-white rounded-lg"
                        : ""
                    }`}
                    onClick={() => setSelectedCard(index)}
                  >
                    <p>Fri, 29 Aug</p>
                    <p
                      className={`text-slate-400 ${
                        selectedCard === index ? "text-inherit" : ""
                      }`}
                    >
                      US $62
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
          <CarouselNext className="!static  translate-y-0 w-12 h-10" />
        </div>
      </Carousel>
    </Card>
  );
}
