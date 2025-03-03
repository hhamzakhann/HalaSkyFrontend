import Link from "next/link";
import logoMainDark from "@/public/logo-black.svg";
import logoSecondary from "@/public/logo-secondary.svg";
import Image from "next/image";

function Logo({ varient, className }) {
  if (varient === "primary") {
    return (
      <Link href="/">
        <Image quality={100} src={logoMainDark} alt="The Halasky logo" />
      </Link>
    );
  }
  if (varient === "secondary") {
    return (
      <Link href="/" className={`flex items-center gap-4 z-10 ${className}`}>
        <Image quality={100} src={logoSecondary} alt="The Halasky logo" />
      </Link>
    );
  }
}

export default Logo;
