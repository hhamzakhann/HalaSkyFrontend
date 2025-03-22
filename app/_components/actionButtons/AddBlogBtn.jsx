"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function AddBlogBtn() {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/dashboard/content-management/new-blog")}
      className={`col-span-full text-black bg-accent hover:bg-accent text-base font-normal`}
    >
      Add Blog +
    </Button>
  );
}
