"use client";

import { useTransition } from "react";
import { createCustomWarning, deleteBlogPost } from "../../_lib/action";

import ButtonCustom from "@/app/_components/Button";
import { toast } from "react-hot-toast";

export default function CreateCustomWarningBtn({ onClose = () => {} }) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    try {
      onClose();
      startTransition(() => createCustomWarning());
    } catch (error) {
      console.error("Failed to delete blog post:", error);
    }
  };
  return (
    <ButtonCustom
      className="col-span-full"
      onClick={handleDelete}
      type="primary"
      isPending={isPending}
      htmlType="button"
    >
      Issued Warning
    </ButtonCustom>
  );
}
