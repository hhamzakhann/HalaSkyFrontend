"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import ButtonCustom from "../Button";
import { roleAssignmentSchema } from "@/app/_lib/zod";

export default function AddMember({ roles }) {
  console.log("ROLES:::", roles);
  const form = useForm({
    resolver: zodResolver(roleAssignmentSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "",
    },
  });

  function onSubmit(data) {
    console.log(data);
  }

  function onerror(errors) {
    console.log(errors);
  }

  return (
    <div className="max-w-2xl mx-auto p-6 ">
      <Form {...form} className="font-spartan">
        <form
          onSubmit={form.handleSubmit(onSubmit, onerror)}
          className="space-y-6"
        >
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
                <FormMessage />
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
                <FormMessage />
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
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map((role) => (
                      <SelectItem key={role.id} value={`${role.id}`}>
                        {role.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-[100px_1fr] items-center gap-4">
            <div />
            <ButtonCustom htmlType="submit" varient="accent">
              Add
            </ButtonCustom>
          </div>
        </form>
      </Form>
    </div>
  );
}
