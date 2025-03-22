import Image from "next/image";
import Image1 from "@/public/image1.png";
import Image2 from "@/public/Ai-robot.png";

export default function SectionInspiration() {
  return (
    <section className="bg-accent py-16 rounded-3xl">
      <div className="max-w-screen-xl mx-auto grid grid-cols-[2fr_1fr] items-center">
        <div>
          <Image src={Image1} />
        </div>
        <div>
          <figure>
            <Image src={Image2} />
            <figcaption className="text-center">
              <h3 className="font-semibold text-5xl mb-2">AI Assist:</h3>{" "}
              <p className="font-normal text-3xl">
                Revolutionizing Your Travel{" "}
                <span className="text-blueDark2 font-semibold">Booking</span>{" "}
                Experience
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
