import Image from "next/image";
import Rating from "./Rating";
import LikeButton from "./LikeButton";
import ShareButton from "./ShareButton";

export default function HotelsCard() {
  return (
    <figure>
      <div className="relative w-full aspect-square">
        <Image
          src="/trending-image-1.jpg"
          fill
          className="object-cover"
          alt="Trening hotel image"
        />
        <div className="absolute top-4 right-4 space-x-3">
          <ShareButton />
          <LikeButton />
        </div>
      </div>
      <figcaption className="py-4 space-y-2 relative">
        <div className="text-xl font-normal md:text-sm lg:text-xl">
          R South Beach
        </div>
        <div className="text-sm font-normal text-slate-500 flex items-center gap-2">
          <img src="/location.svg" />
          <span className="md:text-xs lg:text-sm">
            South Beach, Miami, Florida
          </span>
        </div>
        <div className="space-y-1">
          <div className="font-normal text-xs">Starting from</div>
          <div className="font-normal text-xl">Rs. 2,500/-</div>
        </div>
        <Rating className="absolute top-2 right-0" />
      </figcaption>
    </figure>
  );
}
