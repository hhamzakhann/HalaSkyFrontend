// File: components/Slider.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function Slider() {
  return (
    <div className="w-full py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3.5}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className=""
      >
        {["/trending-image-2.jpg", "/trending-image-1.jpg", "/trending-image-2.jpg", "/trending-image-1.jpg", "/trending-image-2.jpg", "/trending-image-1.jpg"].map((src, i) => (
          <SwiperSlide key={i}>
            <Image
              src={src}
              key={i}
              alt={`Slide ${i + 1}`}
              width={433}
              height={380}
              className="object-cover rounded-3xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
