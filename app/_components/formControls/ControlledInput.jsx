import { spartanFont } from "@/app/font";
import { Input } from "antd";

export default function ControlledInput({
  label = undefined,
  labelClasses = "",
  placeholder = "",
  className = "",
}) {
  return (
    <div className={className}>
      {label && (
        <label
          className={`text-xs font-normal mb-1 inline-block ${spartanFont.className} ${labelClasses}`}
        >
          {label}
        </label>
      )}
      <Input size="large" placeholder={placeholder} />
    </div>
  );
}
