"use client";
import SelectInput from "@/app/_components/formControls/SelectInput";

export default function ModerationFilter() {
  return (
    <>
      <SelectInput defaultValue="comments" className="font-normal text-sm" />
      <SelectInput defaultValue="approved" className="font-normal text-sm" />
    </>
  );
}
