"use client";

import ButtonCustom from "@/app/_components/Button";
import { deletePost } from "@/app/_lib/action";
import { toast } from "react-hot-toast";
import { useTransition } from "react";

export default function DeletePostBtn({ postId }) {
  const [isPending, startTransition] = useTransition();
  const handleClick = () => {
    try {
      startTransition(async () => {
        const result = await deletePost(postId);
        if (result.status) {
          toast.success(result.message);
        } else {
          toast.error(result.message);
        }
      });
    } catch (error) {
      console.error("Failed to delete blog post:", error);
    }
  };
  return (
    <ButtonCustom
      variant="link"
      onClick={handleClick}
      className="!text-slate-900 underline"
      isPending={isPending}
    >
      Delete
    </ButtonCustom>
  );
}
