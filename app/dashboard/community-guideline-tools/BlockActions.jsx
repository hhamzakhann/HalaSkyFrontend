"use client";
import { spartanFont } from "@/app/font";
import { createRestriction } from "@/app/_lib/action";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useTransition } from "react";
import { toast } from "react-hot-toast";

export default function BlockActions({ postId }) {
  const [restrictionTime, setRestrictionTime] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleRestriction = function (type) {
    try {
      startTransition(async () => {
        const response = await createRestriction(postId, type, restrictionTime);

        if (response.status) toast.success(response.message);
        if (!response.status) toast.error(response.error);
      });
    } catch (error) {}
  };

  return (
    <div className="grid md:grid-cols-[80fr_20fr] gap-3">
      <h3 className="col-span-full text-xs font-medium">Temporary block</h3>
      <Select
        defaultValue="24"
        onValueChange={(value) => setRestrictionTime(value)}
      >
        <SelectTrigger className=" flex items-center !justify-center gap-2">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem key="24" value="24">
            24 Hours
          </SelectItem>
          <SelectItem key="72" value="72">
            72 Hours
          </SelectItem>
        </SelectContent>
      </Select>
      <Button
        onClick={() => handleRestriction(2)}
        variant="outline"
        size="icon"
        className="hover:bg-slate-100"
      >
        <img src="/check-icon.svg" />
      </Button>
      <h3
        className={`col-span-full text-sm font-normal text-center text-slate-600 ${spartanFont.className}`}
      >
        Or
      </h3>
      <Button
        onClick={() => handleRestriction(3)}
        className="col-span-full bg-yellow-400 hover:bg-yellow-500 text-black"
      >
        Permanent Block
      </Button>
    </div>
  );
}
