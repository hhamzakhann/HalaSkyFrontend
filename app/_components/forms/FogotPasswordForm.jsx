"use client";

import { useForgotPassword } from "@/app/_contexts/ForgotPasswordContext";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useTransition } from "react";
import { InputOTPShad } from "../UI/InputOTP";
import InitailForgotPassForm from "./InitailForgotPassForm";

export default function FogotPasswordForm() {
  const { email } = useForgotPassword();
  const [isPending, startTransition] = useTransition();

  const handleChange = function (otp) {};

  return (
    <>
      {email ? (
        <InputOTP maxLength={10} onChange={handleChange}>
          <InputOTPGroup>
            <InputOTPSlot disabled={isPending} index={0} />
            <InputOTPSlot disabled={isPending} index={1} />
            <InputOTPSlot disabled={isPending} index={2} />
            <InputOTPSlot disabled={isPending} index={3} />
            <InputOTPSlot disabled={isPending} index={4} />
            <InputOTPSlot disabled={isPending} index={5} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot disabled={isPending} index={6} />
            <InputOTPSlot disabled={isPending} index={7} />
            <InputOTPSlot disabled={isPending} index={8} />
            <InputOTPSlot disabled={isPending} index={9} />
            {/* <InputOTPSlot index={10} /> */}
          </InputOTPGroup>
        </InputOTP>
      ) : (
        <InitailForgotPassForm />
      )}
    </>
  );
}
