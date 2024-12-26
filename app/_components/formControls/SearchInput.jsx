"use client";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function SearchInput({ size = "large", className }) {
  return (
    <Input
      size={size}
      placeholder="Search"
      prefix={<SearchOutlined />}
      className={`w-1/2 ${className}`}
      type="search"
    />
  );
}
