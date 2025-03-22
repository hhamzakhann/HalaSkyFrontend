"use client";

import { PasswordInput } from "@/app/_components/formControls/PasswordInput";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import ButtonCustom from "@/app/_components/Button";
import googleIcon from "@/public/google-icon.svg";
import { handleCredientialSignIn, handleGoogleSignIn } from "@/app/_lib/action";

import { signInSchema } from "@/app/_lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";

export default function UserLoginForm() {
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signInSchema) });

  const onSubmit = function (data) {
    startTransition(async () => {
      const resp = await handleCredientialSignIn({ ...data, redirectTo: "/" });
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-3">
        <div className="mb-3">
          <Input placeholder="Email" type="email" {...register("email")} />
        </div>
        <div>
          <PasswordInput register={register} name="password" />
        </div>
        <div className="flex items-center justify-between mt-4 mb-6">
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
        <ButtonCustom type="accent" htmlType="submit" isPending={isPending}>
          Login
        </ButtonCustom>
      </form>
      <div className="space-y-4">
        <form action={handleGoogleSignIn}>
          <ButtonCustom className="w-full" variant="outline" htmlType="submit">
            <Image src={googleIcon} />
            <span>Login with Google</span>
          </ButtonCustom>
        </form>
      </div>
    </>
  );
}
