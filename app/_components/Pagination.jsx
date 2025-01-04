import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Pagination() {
  return (
    <Select>
      <SelectTrigger className="">
        <SelectValue placeholder="1" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="1">1</SelectItem>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="3">3</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
