import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export function FlightCardSkeleton() {
  return (
    <>
      {Array.from({ length: 3 }, (_, i) => (
        <Card className="w-full mb-4 overflow-hidden" key={i}>
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              {/* Airline logo and info */}
              <div className="flex gap-3">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>

              {/* Price */}
              <div className="text-right">
                <Skeleton className="h-4 w-24 mb-2 ml-auto" />
                <Skeleton className="h-6 w-32" />
              </div>
            </div>

            {/* Flight route */}
            <div className="mt-6 flex items-center justify-between">
              {/* Departure */}
              <div className="space-y-2">
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-4 w-16" />
              </div>

              {/* Flight duration */}
              <div className="flex flex-col items-center">
                <Skeleton className="h-4 w-16 mb-2" />
                <div className="relative w-32 flex items-center justify-center">
                  <Skeleton className="h-0.5 w-full" />
                  <div className="absolute -top-1">
                    <Skeleton className="h-2 w-2 rounded-full" />
                  </div>
                </div>
                <Skeleton className="h-4 w-16 mt-2" />
              </div>

              {/* Arrival */}
              <div className="space-y-2 text-right">
                <Skeleton className="h-5 w-20 ml-auto" />
                <Skeleton className="h-6 w-24 ml-auto" />
                <Skeleton className="h-4 w-16 ml-auto" />
              </div>
            </div>

            {/* Flight details */}
            <div className="mt-6 flex items-center justify-between">
              <Skeleton className="h-8 w-24 rounded-full" />

              <div className="flex items-center gap-3">
                <Skeleton className="h-8 w-24 rounded-full" />
                <Skeleton className="h-8 w-24 rounded-full" />
              </div>

              {/* Action button */}
              <Skeleton className="h-10 w-10 rounded-full" />
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
