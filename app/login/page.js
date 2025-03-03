import BgImage from "@/public/loginBgImage.jpg";
import Logo from "../_components/Logo";
import Image from "next/image";
import { PasswordInput } from "../_components/formControls/PasswordInput";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import ButtonCustom from "../_components/Button";
import googleIcon from "@/public/google-icon.svg";
import Container from "../_components/Container";
import { handleGoogleSignIn } from "../_lib/action";

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
              <h2 className="font-medium text-4xl ">Welcome Back!</h2>
              <p className="font-light text-sm text-[#808080] mt-1 mb-6">
                Please enter your details
              </p>
              <div className="space-y-6">
                <Input placeholder="Email" type="email" />
                <PasswordInput />
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-base font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Remember password
                    </label>
                  </div>
                  <Link
                    href="/forgot-password"
                    className="text-base font-light text-slate-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="space-y-4">
                  <ButtonCustom varient="accent">Login</ButtonCustom>
                  <form action={handleGoogleSignIn}>
                    <ButtonCustom className="w-full" htmlType="submit">
                      <img src={googleIcon} />
                      <span>Login with Google</span>
                    </ButtonCustom>
                  </form>
                </div>
              </div>
            </div>
            <footer>
              <span className="text-base text-slate-500 font-light mr-2">
                Don’t have an account?
              </span>
              <Link
                href="/signup"
                className="text-base font-normal underline decoration-1"
              >
                Sign Up
              </Link>
            </footer>
          </div>
        </div>
      </Container>
    </div>
  );
}
