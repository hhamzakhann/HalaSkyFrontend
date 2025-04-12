import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function HotelCardSkeleton() {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton className="h-6 w-3/4 mb-2" />
      {Array.from({ length: 2 }, (_, i) => (
        <Card key={i} className="overflow-hidden border-gray-100">
          {/* Image skeleton */}
          <Skeleton className="w-full h-[220px]" />

          <CardContent className="p-4">
            {/* Hotel name skeleton */}
            <Skeleton className="h-6 w-3/4 mb-2" />

            {/* Location skeleton */}
            <Skeleton className="h-4 w-1/2 mb-4" />

            {/* Rating and price row */}
            <div className="flex items-center justify-between mt-4">
              <div>
                {/* Rating skeleton */}
                <Skeleton className="h-4 w-24" />
              </div>

              <div className="text-right">
                {/* "Starting from" text skeleton */}
                <Skeleton className="h-3 w-20 mb-1" />

                {/* Price skeleton */}
                <Skeleton className="h-5 w-16" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
