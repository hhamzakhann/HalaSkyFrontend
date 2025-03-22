"use client";
import { deleteBlogPost } from "@/app/_lib/action";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState, useTransition } from "react";
import DeleteBlogbtn from "../actionButtons/DeleteBlogbtn";
import SpinnerMini from "../SpinnerMini";

export default function DeleteBlogModal({ blogId, userId }) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const handleDelete = () => {
    try {
      setOpen((is) => !is);
      startTransition(() => deleteBlogPost(blogId, userId));
    } catch (error) {
      console.error("Failed to delete blog post:", error);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="destructive"
          disabled={isPending}
          className="text-base font-normal"
        >
          {isPending ? (
            <SpinnerMini />
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
              Remove
            </>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-12">
        {/* <DialogHeader>
          <DialogTitle>Are you sure you want to Remove this blog?</DialogTitle>
        </DialogHeader> */}
        <p className="w-2/3 text-center m-auto mb-6">
          Are you sure you want to Remove this blog?
        </p>
        <DialogFooter className="!justify-center gap-6">
          <DialogClose asChild>
            <Button className="flex-1 hover:bg-slate-300" variant="ghost">
              No
            </Button>
          </DialogClose>
          <Button
            className="text-black bg-accent hover:bg-accent text-base font-normal flex-1"
            onClick={handleDelete}
          >
            Yes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
