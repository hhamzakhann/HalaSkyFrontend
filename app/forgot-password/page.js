import BgImage from "@/public/bg-forgotPass.jpg";
import Logo from "../_components/Logo";
import Image from "next/image";
import Link from "next/link";
import Container from "../_components/Container";
import FogotPasswordForm from "../_components/forms/FogotPasswordForm";

export default function Page() {
  return (
    <div className="h-screen w-full">
      <Image src={BgImage} className="object-cover" fill />

      <Container className="h-full">
        <div className="p-3 grid grid-cols-[1fr_450px] h-full gap-12 relative z-10">
          <div className="text-white mt-12 ml-12">
            <h1 className="text-6xl font-bold uppercase leading-tight mb-6">
              Seamless <br /> Flight Booking <br /> Made Easy
            </h1>
            <p className="font-normal text-xl w-2/3">
              Book your flights effortlessly with personalized options,
              real-time updates, and secure payment methods. Enjoy a hassle-free
              travel experience with our smart booking system
            </p>
          </div>
          <div className="bg-white rounded-xl px-8 py-12 flex flex-col justify-between font-spartan text-center">
            <Logo varient="secondary" className="justify-center" />
            <div>
              <h2 className="font-medium text-4xl ">Forgot Password?</h2>
              <p className="font-light text-sm text-[#808080] mt-1 mb-6">
                No worries, we’ll send you reset instructions.
              </p>
              <FogotPasswordForm />
            </div>
            <footer>
              <span className="text-base text-slate-500 font-light mr-2">
                Back to
              </span>
              <Link
                href="/login"
                className="text-base font-normal underline decoration-1"
              >
                Sign In
              </Link>
            </footer>
          </div>
        </div>
      </Container>
    </div>
  );
}
