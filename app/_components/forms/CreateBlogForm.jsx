"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import {
  ArrowLeft,
  Upload,
  Bold,
  Italic,
  Underline,
  Quote,
  Code,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Undo,
  Redo,
} from "lucide-react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import ReactQuill from "react-quill";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import MultiSelect from "../formControls/MultiSelect";
import { createBlog } from "@/app/_lib/data-service";
import { useSession } from "next-auth/react";
import { BASE_URL } from "@/constant/constant";
import { handleSignOut } from "@/app/_lib/action";

const blogFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  category: z.string().min(1, "Category is required"),
  author: z.string().min(1, "Author is required"),
  tags: z
    .array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    )
    .optional(),
  content: z.string().min(1, "Content is required"),
  image: z.any().optional(),
});

const tagOptions = [
  { value: "technology", label: "Technology" },
  { value: "design", label: "Design" },
  { value: "business", label: "Business" },
  { value: "lifestyle", label: "Lifestyle" },
];

const catageoryList = [
  { value: 0, title: "Flights" },
  { value: 1, title: "Hotels" },
  { value: 2, title: "Other" },
];
const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

export default function CreateBlogForm({ authorName }) {
  const reouter = useRouter();
  const { data: sessionData, status } = useSession();

  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(blogFormSchema),
    defaultValues: {
      title: "",
      category: "",
      author: authorName,
      tags: [],
      content: "",
    },
  });

  function handleImageChange(e) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  async function onSubmit(data) {
    // Here you would typically send the data to your API
    const { category, author, content, image: fileInput, tags, title } = data;

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${sessionData.user.token}`);

    const formdata = new FormData();
    formdata.append("categoryId", category);
    formdata.append("title", title);
    formdata.append("userId", "1");
    formdata.append("isPublished", "0");
    formdata.append("thumbnail", fileInput[0]);
    formdata.append("content", content);

    tags.forEach((tag) => {
      formdata.append("tags[]", tag);
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    try {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/blog/add`, requestOptions);

      // if (response.status === 401) {
      //   await handleSignOut();
      // }
      const dataRes = await response.json();

      if (dataRes.status) {
        toast.success(dataRes.message);
        reouter.push("/dashboard/content-management");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen bg-white">
      {/* Main content */}
      <main className="flex-1 p-6">
        <div className="max-w-2xl mx-auto">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit, (err) =>
                console.error(err)
              )}
              className="space-y-6"
            >
              <div className="bg-[#DDDDDD] rounded-2xl p-8 flex flex-col items-center justify-center border border-gray-200">
                {imagePreview ? (
                  <div className="relative w-full">
                    <img
                      src={imagePreview || "/placeholder.svg"}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <Button
                      type="button"
                      variant="link"
                      size="sm"
                      className="absolute top-2 right-2 bg-white"
                      onClick={() => {
                        setImagePreview(null);
                        form.setValue("image", undefined);
                      }}
                    >
                      Remove
                    </Button>
                  </div>
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
                    <p className="text-gray-500 mb-2">JPG, PNG Or Webp</p>
                    <FormField
                      control={form.control}
                      name="image"
                      render={({ field: { onChange, value, ...field } }) => (
                        <FormItem>
                          <FormControl>
                            <div>
                              <Button
                                type="button"
                                variant="link"
                                onClick={() => {
                                  document
                                    .getElementById("image-upload")
                                    ?.click();
                                }}
                              >
                                Upload Image
                              </Button>
                              <Input
                                id="image-upload"
                                type="file"
                                accept="image/jpeg,image/png,image/webp"
                                className="hidden"
                                onChange={(e) => {
                                  handleImageChange(e);
                                  onChange(e.target.files);
                                }}
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      Minimum Size : 180px To 180px
                    </p>
                  </>
                )}
              </div>

              {/* Title */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Category and Author */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue
                          className="text-slate-400"
                          placeholder="Select Category"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {catageoryList.map((category) => (
                          <SelectItem
                            key={category.title}
                            value={category.value}
                          >
                            {category.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                <FormField
                  control={form.control}
                  name="author"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Author"
                          {...field}
                          className=" bg-gray-100"
                          disabled
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <MultiSelect form={form} tagOptions={tagOptions} />

              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Controller
                        name="content"
                        control={form.control}
                        render={({ field }) => (
                          <ReactQuill
                            theme="snow"
                            modules={modules}
                            formats={formats}
                            {...field}
                          />
                        )}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-12 bg-yellow-400 hover:bg-yellow-500 text-black"
              >
                {isLoading ? "Creating..." : "Create"}
              </Button>
            </form>
          </Form>
        </div>
      </main>
    </div>
  );
}
