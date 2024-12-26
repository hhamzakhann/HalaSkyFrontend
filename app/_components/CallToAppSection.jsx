import React from "react";
import Container from "./Container";

export default function CallToAppSection() {
  return (
    <Container>
      <div className="md:grid md:grid-cols-[1.5fr_1fr] gap-4 max-w-[90%] mx-auto mb-8 md:px-12">
        <div className="flex flex-col items-center md:items-start space-y-5 mb-6">
          <div className="w-16 h-16 border border-slate-950 rounded-full flex items-center  justify-center">
            <img src="/phone-icon.svg" alt="" />
          </div>
          <h2 className="text-4xl font-medium text-center">
            Get the Halasky app!
          </h2>
          <p className="text-center md:text-start">
            Our app has all your hotel needs covered: Secure payment channels,
            easy 4-step booking process, and sleek user designs. What more could
            you ask for?
          </p>
          <p>Available now</p>
          <div className="flex flex-col items-center gap-2  sm:flex-row">
            <img className="w-28 sm:w-40" src="/google-play-icon.svg" alt="" />
            <img className="w-28 sm:w-40" src="/appleStore-icon.svg" alt="" />
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img src="/phone-image.png" alt="" />
        </div>
      </div>
    </Container>
  );
}
