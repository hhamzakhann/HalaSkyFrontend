"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function EditBlogButton() {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/dashboard/content-management/update-blog")}
      variant="secondary"
      className="text-base font-normal"
    >
      <img src="/edit-icon.svg" />
      Edit
    </Button>
  );
}
