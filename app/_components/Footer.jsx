import React from "react";
import Container from "./Container";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="bg-black py-8 text-white">
      <Container>
        <div className="grid grid-cols-[40%_15%_15%_30%] md:px-12">
          <div>
            <Logo varient="primary" />
          </div>
          <div>B</div>
          <div>C</div>
          <div>D</div>
        </div>
      </Container>
    </div>
  );
}
