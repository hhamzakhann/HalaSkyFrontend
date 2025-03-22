"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import CreateCustomWarningBtn from "../actionButtons/CreateCustomWarningBtn";
import ButtonCustom from "../Button";
import * as z from "zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { BASE_URL } from "@/constant/constant";
import { useSession } from "next-auth/react";
import { createCustomWarning, handleSignOut } from "@/app/_lib/action";
import { useTransition } from "react";
import { toast } from "react-hot-toast";

const formSchema = z.object({
  message: z.string().min(1, "Message is required"),
});

export default function CreateCustomWarningModal({ post }) {
  const [isPending, startTransition] = useTransition();
  const { data: sessionData, status } = useSession();

  const [open, setOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      message: "",
    },
  });

  const onsubmit = async function (data) {
    try {
      startTransition(async () => {
        const resp = await createCustomWarning(post, data.message);
        if (resp.status) {
          toast.success(resp.message);
          setOpen((is) => !is);
        }
        if (!resp.status) toast.error(resp.error);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <ButtonCustom className="col-span-full" type="primary">
          Issued Warning
        </ButtonCustom>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-12">
        <p className="text-center font-semibold m-auto mb-6">
          Write a custom warning message?
        </p>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onsubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Message"
                        {...field}
                        className="min-h-[120px] max-h-[160px] rounded-lg border-gray-200"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter>
                <DialogClose asChild>
                  <ButtonCustom variant="outline" className="w-full">
                    Close
                  </ButtonCustom>
                </DialogClose>
                <ButtonCustom
                  type="accent"
                  htmlType="submit"
                  isPending={isPending}
                >
                  Create
                </ButtonCustom>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
