import { Button } from "antd";

export default function ButtonCustom({
  varient,
  className,
  shape,
  size = "large",
  onClick,
  children,
  type,
  htmlType = "button",
}) {
  const base = "w-full ";

  const varientStyle = {
    accent: base + "!bg-accent !border !bg-accent ",
    secondary: base + "!bg-secondary !text-white",
    gray: base + "!bg-lightGray text-white",
    danger: base + "!bg-danger text-white",
  };

  return (
    <Button
      htmlType={htmlType}
      type={type}
      shape={shape}
      size={size}
      onClick={onClick}
      className={`${varientStyle[varient]} ${className} ${
        varient === "iconBtn" && "!border-none !p-0"
      }`}
    >
      {children}
    </Button>
  );
}
