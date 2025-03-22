"use client";

import { useState, useTransition } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ImageIcon, MapPinIcon, PlusCircle, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ButtonCustom from "./Button";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import mediaIcon from "@/public/media-icon.svg";
import barChart from "@/public/bars-icon.svg";
import locationIcon from "@/public/location.svg";
import { pollFormSchema, postFormSchema } from "../_lib/zod";
import { creatPoll } from "../_lib/action";

export function ShareInput({ user }) {
  const [activeTab, setActiveTab] = useState("post");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const [isPending, startTransition] = useTransition();

  // Post form
  const postForm = useForm({
    resolver: zodResolver(postFormSchema),
    defaultValues: {
      content: "",
    },
  });

  // Poll form
  const pollForm = useForm({
    resolver: zodResolver(pollFormSchema),
    defaultValues: {
      title: "",
      description: "",
      question: "",
      options: ["", ""],
    },
  });

  // Use the useFieldArray hook for dynamic poll options
  const {
    fields: pollOptions,
    append,
    remove,
  } = useFieldArray({
    control: pollForm.control,
    name: "options",
  });

  const handleAddPollOption = () => {
    append("");
  };

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setSelectedImages([...selectedImages, ...newImages]);
    }
  };

  const handleRemoveImage = (index) => {
    const newImages = [...selectedImages];
    newImages.splice(index, 1);
    setSelectedImages(newImages);
  };

  const onPostSubmit = (data) => {
    setIsModalOpen(false);
    postForm.reset();
    setSelectedImages([]);
  };

  const onPollSubmit = (data) => {
    startTransition(async () => {
      const resp = await creatPoll(data);
    });
    // Here you would typically send the data to your API
    setIsModalOpen(false);
    pollForm.reset();
  };

  return (
    <Card className="border-none shadow-[0_0_25px_rgba(0,0,0,0.1)] mb-6">
      <CardContent className="p-4">
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <div className="flex items-center gap-3 mb-4">
            <DialogTrigger asChild>
              <ButtonCustom
                variant="ghost"
                className="w-full justify-start text-muted-foreground h-12 px-4 border-none shadow-none hover:bg-transparent font-normal text-sm"
              >
                Share or ask something
              </ButtonCustom>
            </DialogTrigger>
          </div>

          <div className="flex items-center gap-10 border-t pt-3">
            <Button
              variant="icon"
              className="flex items-center gap-2 border-none hover:bg-transparent font-light p-0"
              onClick={() => {
                setActiveTab("post");
                setIsModalOpen(true);
              }}
            >
              <Image
                className="h-5 w-5"
                src={mediaIcon || "/placeholder.svg"}
                alt="Media icon"
              />
              <span>Image / Video</span>
            </Button>

            <Button
              variant="ghost"
              className="flex items-center gap-2 border-none hover:bg-transparent font-light p-0"
              onClick={() => {
                setActiveTab("poll");
                setIsModalOpen(true);
              }}
            >
              <Image
                className="h-5 w-5"
                src={barChart || "/placeholder.svg"}
                alt="Poll icon"
              />
              <span>Create a Poll</span>
            </Button>

            <Button
              variant="ghost"
              className="flex items-center gap-2 font-light border-none hover:bg-transparent p-0"
            >
              <Image
                className="h-5 w-5 grayscale opacity-75"
                src={locationIcon || "/placeholder.svg"}
                alt="Location icon"
                unoptimized
              />
              <span>Location</span>
            </Button>
          </div>

          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Create Content</DialogTitle>
            </DialogHeader>
            <Tabs
              defaultValue="post"
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="post">Create Post</TabsTrigger>
                <TabsTrigger value="poll">Create Poll</TabsTrigger>
              </TabsList>

              <TabsContent value="post" className="space-y-4">
                <Form {...postForm}>
                  <form
                    onSubmit={postForm.handleSubmit(onPostSubmit)}
                    className="space-y-4"
                  >
                    {selectedImages.length > 0 && (
                      <div className="grid grid-cols-2 gap-2">
                        {selectedImages.map((img, index) => (
                          <div key={index} className="relative">
                            <Image
                              src={img || "/placeholder.svg"}
                              alt="Uploaded content"
                              width={200}
                              height={200}
                              className="rounded-md object-cover w-full aspect-square"
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="absolute top-2 right-2 bg-white rounded-full h-8 w-8"
                              onClick={() => handleRemoveImage(index)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}

                    <FormField
                      control={postForm.control}
                      name="content"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              placeholder="What's on your mind?"
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex items-center justify-between border-t pt-4">
                      <div className="flex gap-4">
                        <label
                          htmlFor="post-image-upload"
                          className="cursor-pointer"
                        >
                          <div className="flex items-center gap-2 text-gray-600">
                            <ImageIcon className="h-5 w-5" />
                            <span>Image / Video</span>
                          </div>
                          <input
                            id="post-image-upload"
                            type="file"
                            accept="image/*,video/*"
                            multiple
                            className="hidden"
                            onChange={handleImageUpload}
                          />
                        </label>
                        <div className="flex items-center gap-2 text-gray-600 cursor-pointer">
                          <MapPinIcon className="h-5 w-5" />
                          <span>Location</span>
                        </div>
                      </div>
                      <Button
                        type="submit"
                        className="bg-[#fccd27] hover:bg-[#e9bc24] text-black"
                      >
                        Post
                      </Button>
                    </div>
                  </form>
                </Form>
              </TabsContent>

              <TabsContent value="poll" className="space-y-4">
                <Form {...pollForm}>
                  <form
                    onSubmit={pollForm.handleSubmit(onPollSubmit)}
                    className="space-y-4"
                  >
                    <FormField
                      control={pollForm.control}
                      name={`title`}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input
                              placeholder="Title"
                              {...field}
                              className="border rounded-md"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={pollForm.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              placeholder="Poll Description"
                              className="min-h-[60px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={pollForm.control}
                      name="question"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              placeholder="Ask a question..."
                              className="max-h-[40px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="space-y-2">
                      {pollOptions.map((field, index) => (
                        <div key={field.id} className="flex gap-2">
                          <FormField
                            control={pollForm.control}
                            name={`options.${index}`}
                            render={({ field }) => (
                              <FormItem className="flex-1">
                                <FormControl>
                                  <Input
                                    placeholder={`Option ${index + 1}`}
                                    {...field}
                                    className="border rounded-md"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          {pollOptions.length > 2 && (
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              onClick={() => remove(index)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>

                    <Button
                      type="button"
                      variant="outline"
                      className="w-full flex items-center justify-center gap-2"
                      onClick={handleAddPollOption}
                    >
                      <PlusCircle className="h-4 w-4" />
                      Add more
                    </Button>

                    <div className="flex items-center justify-between border-t pt-4">
                      <div className="flex gap-4">
                        <label
                          htmlFor="poll-image-upload"
                          className="cursor-pointer"
                        >
                          <div className="flex items-center gap-2 text-gray-600">
                            <ImageIcon className="h-5 w-5" />
                            <span>Image / Video</span>
                          </div>
                          <input
                            id="poll-image-upload"
                            type="file"
                            accept="image/*,video/*"
                            multiple
                            className="hidden"
                            onChange={handleImageUpload}
                          />
                        </label>
                        <div className="flex items-center gap-2 text-gray-600 cursor-pointer">
                          <MapPinIcon className="h-5 w-5" />
                          <span>Location</span>
                        </div>
                      </div>
                      <Button
                        type="submit"
                        className="bg-[#fccd27] hover:bg-[#e9bc24] text-black"
                      >
                        Post
                      </Button>
                    </div>
                  </form>
                </Form>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
