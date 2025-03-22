"use client";

import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { deleteBlogPost } from "../../_lib/action";

export default function DeleteBlogbtn({ blogId, userId, onClose }) {
  const [isPending, startTransition] = useTransition();
  const handleDelete = () => {
    try {
      onClose();
      startTransition(() => deleteBlogPost(blogId, userId));
    } catch (error) {
      console.error("Failed to delete blog post:", error);
    }
  };
  return (
    <Button
      className="text-black bg-accent hover:bg-accent text-base font-normal flex-1"
      onClick={handleDelete}
    >
      Yes
    </Button>
  );
}
