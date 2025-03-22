"use client";

import ButtonCustom from "@/app/_components/Button";
import { approvePost } from "@/app/_lib/action";
import { Loader2 } from "lucide-react";
import { useTransition } from "react";
import { toast } from "react-hot-toast";

export default function PostApprovalBtn({ postId }) {
  const [isPending, startTransition] = useTransition();
  const handleClick = () => {
    try {
      startTransition(async () => {
        const result = await approvePost(postId);
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
    <ButtonCustom type="success" onClick={handleClick} isPending={isPending}>
      Approve
    </ButtonCustom>
  );
}
