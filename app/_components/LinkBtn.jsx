import { Link } from "lucide-react";

export default function LinkBtn({ href, varient, className }) {
  const base = "w-full ";

  const varientStyle = {
    accent: base + "!bg-accent !border !bg-accent ",
    secondary: base + "!bg-secondary !text-white",
    gray: base + "!bg-lightGray text-white",
    danger: base + "!bg-danger text-white",
    outline: base + "!border !border-slat-10",
  };

  return (
    <Link href={href} className={`${varientStyle[varient]} ${className}`}>
      LinkBtn
    </Link>
  );
}
