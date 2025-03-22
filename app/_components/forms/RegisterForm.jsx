"use client";

import { PasswordInput } from "@/app/_components/formControls/PasswordInput";
import { Input } from "@/components/ui/input";

import ButtonCustom from "@/app/_components/Button";
import googleIcon from "@/public/google-icon.svg";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { handleUserSignUp } from "@/app/_lib/action";
import { useState } from "react";
import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/app/_lib/zod";
import { InputOTPShad } from "../UI/InputOTP";
import { useRegister } from "@/app/_contexts/RegisterContext";
import { useEffect } from "react";

export default function RegisterForm() {
  const [submitError, setSubmitError] = useState(null);
  const [isSubmittedSuccess, setIsSubmittedSuccess] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { setUserEmailToRegister } = useRegister();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    watch,
    getValues,
  } = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      number: undefined,
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    const email = getValues("email");

    if (email) setUserEmailToRegister(email);
  }, [watch("email")]);

  const onSubmit = (data) => {
    startTransition(async () => {
      try {
        const result = await handleUserSignUp(data);

        if (!result.status) toast.error(result.message);

        if (result.status) {
          reset(); // Reset form
          toast.success(result.message);
          setIsSubmittedSuccess(true);
        } else {
          setSubmitError(result.error);
        }
      } catch (error) {
        setSubmitError("An unexpected error occurred. Please try again.");
        console.error(error);
      }
    });
  };

  //     if (data.status) {
  //       toast.success(data.message);
  //       router.push("/verify-password");
  return (
    <>
      {!isSubmittedSuccess ? (
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input placeholder="Name" type="text" {...register("name")} />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Input placeholder="Number" type="number" {...register("number")} />
            {errors.number && (
              <p className="mt-1 text-sm text-red-500">
                {errors.number.message}
              </p>
            )}
          </div>
          <div>
            <Input placeholder="Email" type="email" {...register("email")} />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <PasswordInput register={register} name="password" />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>
          <div>
            <PasswordInput
              register={register}
              name="confirmPassword"
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          {submitError && (
            <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {submitError}
            </div>
          )}
          <div className="space-y-4">
            <ButtonCustom type="accent" htmlType="submit">
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing Up...
                </>
              ) : (
                "Sign Up"
              )}
            </ButtonCustom>
            <ButtonCustom
              variant="outline"
              className="w-full hover:bg-transparent"
            >
              <img src={googleIcon} />
              <span>Login with Google</span>
            </ButtonCustom>
          </div>
        </form>
      ) : (
        <InputOTPShad />
      )}
    </>
  );
}
