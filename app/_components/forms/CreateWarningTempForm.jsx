"use client";

import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { useTransition } from "react";
import SpinnerMini from "../SpinnerMini";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import { Upload } from "lucide-react";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SelectShadecn } from "../formControls";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const catageoryList = [
  { value: "Post", title: "Post" },
  { value: "Comment", title: "Comment" },
];

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  message: z.string().min(1, "Message is required"),
  type: z.string().min(1, "Violation type is required"),
  image: z.any().optional(),
});

export default function CreateWarningTempForm({ setOpen }) {
  const [isPending, startTransition] = useTransition();
  const [imagePreview, setImagePreview] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCreate = () => {
    try {
      setOpen((is) => !is);
      //   startTransition(() => deleteBlogPost(blogId, userId));
    } catch (error) {
      console.error("Failed to delete blog post:", error);
    }
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      message: "",
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      form.setValue("image", file);
    }
  };

  const onSubmit = async (data) => {
    try {
      //   await createWarningTemplate(data);
      form.reset();
      setImagePreview(null);
    } catch (error) {
      console.error("Error creating warning template:", error);
    }
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col items-center">
            <div
              className="relative w-56 h-56 bg-[#dddddd] rounded-3xl flex flex-col items-center justify-center cursor-pointer"
              onClick={() => document.getElementById("image-upload")?.click()}
            >
              {imagePreview ? (
                <img
                  src={imagePreview || "/placeholder.svg"}
                  alt="Preview"
                  className="w-full  object-cover rounded-lg"
                />
              ) : (
                <>
                  <div className="mb-2  rounded-full bg-gray-200">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2471 12.18L12.8151 14.74L15.3831 12.18"
                        stroke="#808080"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.8154 4.5V14.67"
                        stroke="#808080"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20.9608 12.68C20.9608 17.1 17.9514 20.68 12.9357 20.68C7.92005 20.68 4.91064 17.1 4.91064 12.68"
                        stroke="#808080"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-[#808080]">JPG, PNG Or Webp</p>
                </>
              )}
              <input
                id="image-upload"
                type="file"
                accept="image/jpeg,image/png,image/webp"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>

            <Button
              type="button"
              variant="link"
              size="sm"
              className=" bg-white mt-4 underline font-normal text-sm mb-2"
              onClick={() => document.getElementById("image-upload")?.click()}
            >
              Upload Image
            </Button>
            <p className="text-xs text-[#808080] ">
              Minimum Size : 180px To 180px
            </p>
          </div>

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Title"
                    {...field}
                    className="rounded-lg border-gray-200"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <Select onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Voilation category type" />
                </SelectTrigger>
                <SelectContent>
                  {catageoryList.map((category) => (
                    <SelectItem key={category.title} value={category.value}>
                      {category.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
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
              </FormItem>
            )}
          />

          <DialogFooter>
            <Button
              className="text-black bg-accent hover:bg-accent text-base font-normal flex-1"
              onClick={handleCreate}
            >
              {isPending ? <SpinnerMini /> : "Create"}
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </div>
  );
}
