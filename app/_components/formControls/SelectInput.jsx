"use client";
import { Select } from "antd";

// CHANGE LATER

export default function SelectInput({
  defaultValue = "comments",
  variant = "filled",
  options = [],
  className = "",
  size = "large",
  label = "",
  labelClasses = "",
}) {
  const handleChange = (value) => {};
  return (
    <div className="flex flex-col">
      {label && (
        <label
          className={`text-xs font-normal mb-1 inline-block ${labelClasses}`}
        >
          {label}
        </label>
      )}
      <Select
        defaultValue={defaultValue}
        style={{
          width: 120,
        }}
        size={size}
        onChange={handleChange}
        variant={variant}
        options={options}
        className={className}
      />
    </div>
  );
}
