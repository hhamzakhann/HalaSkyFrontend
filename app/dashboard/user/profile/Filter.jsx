"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const handleFilter = function (filter) {
    const params = new URLSearchParams(searchParams);
    params.set("filterBy", filter);
    router.replace(`${pathName}?${params.toString()}`);
  };

  return (
    <Select defaultValue="1" onValueChange={(value) => handleFilter(value)}>
      <SelectTrigger className="w-35 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
          />
        </svg>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem key="1" value="1">
          Active
        </SelectItem>
        <SelectItem key="0" value="0">
          Banned
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
