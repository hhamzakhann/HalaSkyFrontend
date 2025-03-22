import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function ButtonCustom({
  variant,
  className,
  size = undefined,
  onClick,
  children,
  type,
  htmlType = "button",
  isPending = false,
  shape,
}) {
  const base = "w-full ";

  const varientStyle = {
    primary: base + "bg-blue hover:bg-blue/90",
    success: base + "bg-success hover:bg-success/90",
    accent: base + "bg-accent hover:bg-accent/90 text-black",
    secondary: base + "!bg-secondary !text-white",
    gray: base + "!bg-lightGray text-white",
    danger: base + "!bg-danger text-white",
    roundedWhite: base + "rounded-full border-none bg-white",
  };

  return (
    <Button
      type={htmlType}
      htmlType={htmlType}
      size={size}
      shape={shape}
      onClick={onClick}
      variant={variant}
      className={`${varientStyle[type]} ${className}`}
    >
      {isPending ? (
        <>
          <Loader2 className="animate-spin" />
          Please wait
        </>
      ) : (
        children
      )}
    </Button>
  );
}
