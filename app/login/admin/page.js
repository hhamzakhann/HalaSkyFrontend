"use client";
import Logo from "@/app/_components/Logo";
import { PasswordInput } from "@/app/_components/formControls/PasswordInput";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import ButtonCustom from "@/app/_components/Button";
import googleIcon from "@/public/google-icon.svg";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/app/_lib/zod";
import { handleCredientialSignIn } from "@/app/_lib/action";

export default function Page() {
  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  const onSubmit = async function (data) {
    try {
      const resp = await handleCredientialSignIn(data);
      console.log("RESP", resp);
    } catch (error) {
      console.log("Unexpected error");
    }
  };
  return (
    <div className="h-screen w-full bg-lightGray1 flex items-center justify-center">
      <div className="bg-white rounded-xl px-8 py-12 flex flex-col justify-between font-spartan text-center w-1/3 space-y-12">
        <Logo varient="secondary" className="justify-center" />
        <div>
          <h2 className="font-medium text-4xl ">Welcome Back!</h2>
          <p className="font-light text-sm text-[#808080] mt-1 mb-6">
            Please Enter Your Details
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-base font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember password
                  </label>
                </div>
                <Link
                  href="/forgot-password"
                  className="text-base font-light text-slate-500"
                >
                  Forgot password?
                </Link>
              </div>
              <ButtonCustom htmlType="submit" varient="accent">
                Login
              </ButtonCustom>
            </form>
          </Form>
          {/* <div className="space-y-6">
            <Input placeholder="Email" type="email" />
            <PasswordInput />
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-base font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember password
                </label>
              </div>
              <Link
                href="/forgot-password"
                className="text-base font-light text-slate-500"
              >
                Forgot password?
              </Link>
            </div>
            <ButtonCustom varient="accent">Login</ButtonCustom>
          </div> */}
        </div>
      </div>
    </div>
  );
}
