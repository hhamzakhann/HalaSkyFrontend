"use client";
import { spartanFont } from "@/app/font";
import { createFaqs } from "@/app/_lib/action";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import * as z from "zod";
import ButtonCustom from "../Button";

const formSchema = z.object({
  question: z.string().min(1, "Question is required"),
  answer: z.string().min(1, "Answer is required"),
});

export default function CreateFaqModal() {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: "",
      answer: "",
    },
  });

  const onsubmit = (data) => {
    try {
      setOpen((is) => !is);
      startTransition(async () => {
        const resp = await createFaqs(data);
        if (resp.status) toast.success(resp.message);
        if (!resp.status) toast.error(resp.error);
      });
    } catch (error) {
      console.error("Failed to delete blog post:", error);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <ButtonCustom
          type="accent"
          className={`ml-auto w-auto ${spartanFont.className}`}
        >
          <img src="/edit-icon.svg" />
          <span>Create FAQ</span>
        </ButtonCustom>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-12">
        <p className="text-center font-semibold m-auto mb-6">
          Create new Frequenlty Ask Question.
        </p>
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onsubmit)}>
            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Question" {...field} name="question" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="answer"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Answer"
                      {...field}
                      className="min-h-16 max-h-32"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="!justify-center gap-6">
              <DialogClose asChild>
                <ButtonCustom
                  variant="outline"
                  className="flex-1 hover:bg-slate-300"
                >
                  Close
                </ButtonCustom>
              </DialogClose>
              <ButtonCustom
                className="text-base font-normal flex-1"
                htmlType="submit"
                type="accent"
              >
                Create
              </ButtonCustom>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
