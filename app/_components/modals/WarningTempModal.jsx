"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import ButtonCustom from "../Button";
import CreateWarningTempForm from "../forms/CreateWarningTempForm";

export default function WarningTempModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <ButtonCustom className="ml-auto w-auto" type="accent">
          <img src="/edit-icon.svg" />
          Create Warning Template
        </ButtonCustom>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] ">
        <DialogHeader className="mb-8">
          <DialogTitle>Create Warning Template</DialogTitle>
        </DialogHeader>

        <CreateWarningTempForm setOpen={(is) => !is} />
      </DialogContent>
    </Dialog>
  );
}
