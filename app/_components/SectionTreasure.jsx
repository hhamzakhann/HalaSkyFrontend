import Container from "./Container";

export default function SectionTreasure() {
  return (
    <Container>
      <section className="lg:grid lg:grid-cols-[1fr_2fr] md:gap-16 mb-12 md:py-6 md:pb-8 md:px-12">
        <div className="flex flex-col justify-center text-center lg:text-start mb-7">
          <span className="text-4xl md:text-6xl font-semibold mb-5">
            Global Gems:
          </span>
          <span className="text-4xl md:text-6xl font-normal leading-normal">
            Unveiling
          </span>
          <span className="text-4xl md:text-6xl font-normal leading-normal">
            Hidden
          </span>
          <span className="text-4xl md:text-6xl font-normal leading-normal">
            Treasures
          </span>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <img src="/gems-image-1.png" />
            </div>
            <div className="flex">
              <img src="/gems-image-2.png" className="ml-auto" />
            </div>
            <div>
              <img src="/gems-image-3.png" />
            </div>
            <div className="flex">
              <img src="/gems-image-4.png" className="ml-auto" />
            </div>
          </div>
          <div className="p-2 md:p-8 border border-slate-950 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img src="/s-logo-red.svg" className="w-8 md:w-auto" />
          </div>
        </div>
      </section>
    </Container>
  );
}
