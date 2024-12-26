import Image from "next/image";
import React from "react";
import Container from "./Container";

export default function PollSection() {
  return (
    <Container>
      <div className="md:px-12">
        <div className="relative rounded-3xl overflow-hidden flex items-center justify-end py-8 mb-24">
          <Image
            fill
            src="/calltoAction-image.png"
            className="object-cover bg-bottom	 -z-10"
            alt="call to action image"
          />
          <img src="/callToAction-ques-image.png" />
        </div>
      </div>
    </Container>
  );
}
