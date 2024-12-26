import { Button } from "antd";

export default function ButtonCustom({
  varient,
  className,
  shape,
  size = "large",
  onClick,
  children,
  type,
}) {
  const base = "w-full ";

  const varientStyle = {
    accent: base + "!bg-accent !border !border-secondary ",
    secondary: base + "!bg-secondary !text-white",
    gray: base + "!bg-lightGray text-white",
    danger: base + "!bg-danger text-white",
  };

  return (
    <Button
      type={type}
      shape={shape}
      size={size}
      onClick={onClick}
      className={`${varientStyle[varient]} ${className}`}
    >
      {children}
    </Button>
  );
}
