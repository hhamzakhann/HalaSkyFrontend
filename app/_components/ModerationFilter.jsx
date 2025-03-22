"use client";
import SelectInput from "@/app/_components/formControls/SelectInput";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ModerationFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const handleCategoryFilter = function (value) {
    const params = new URLSearchParams(searchParams);
    params.set("category", value);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  };

  const handleStatusFilter = function (value) {};
  return (
    <>
      <Select onValueChange={(value) => handleCategoryFilter(value)}>
        <SelectTrigger className="basis-60 flex items-center gap-2">
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem key="0" value="all">
            All
          </SelectItem>
          <SelectItem key="1" value="posts">
            Posts
          </SelectItem>
          <SelectItem key="2" value="comments">
            Comments
          </SelectItem>
        </SelectContent>
      </Select>
      <Select
        defaultValue="1"
        onValueChange={(value) => handleStatusFilter(value)}
      >
        <SelectTrigger className="w-35 flex items-center gap-2">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem key="1" value="1">
            Approved
          </SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}
