"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { roleAssignmentSchema } from "@/app/_lib/zod";

export default function EditRoleAssignment() {
  const form = useForm({
    resolver: zodResolver(roleAssignmentSchema),
    defaultValues: {
      name: "Robert",
      email: "Debra.Holt@Example.Com",
      role: "support",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Form {...form} className="font-spartan">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="grid grid-cols-[100px_1fr] items-center gap-4">
                <FormLabel className="text-right text-lightGray2 font-normal text-sm">
                  Name
                </FormLabel>

                <FormControl className="!mt-0">
                  <Input {...field} />
                </FormControl>
                <FormMessage className="col-start-2 col-end-2 !mt-0" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="grid grid-cols-[100px_1fr] items-center gap-4">
                <FormLabel className="text-right text-lightGray2 font-normal text-sm">
                  Email
                </FormLabel>

                <FormControl className="!mt-0">
                  <Input {...field} />
                </FormControl>
                <FormMessage className="col-start-2 col-end-2 !mt-0" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="grid grid-cols-[100px_1fr] items-center gap-4">
                <FormLabel className="text-right text-lightGray2 font-normal text-sm">
                  Role
                </FormLabel>

                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="support">Support</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="user">User</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className="col-start-2 col-end-2 !mt-0" />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-[100px_1fr] items-center gap-4">
            <div />
            <Button
              type="submit"
              className="bg-[#fccd27] hover:bg-[#fccd27]/90 text-black w-full "
            >
              Update
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
