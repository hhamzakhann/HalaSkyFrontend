"use client";

import { useRegister } from "@/app/_contexts/RegisterContext";
import { verifyOTP } from "@/app/_lib/action";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTransition } from "react";
import { toast } from "react-hot-toast";

export function InputOTPShad() {
  const { userEmailToRegister } = useRegister();
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const handleChange = (value) => {
    if (value.length !== 10) return;

    startTransition(async () => {
      const resp = await verifyOTP(userEmailToRegister, value);
      if (!resp.status) toast.error(resp.message);
      if (resp.status) {
        toast.success(resp.message);
        router.push("/login");
      }
    });
  };
  return (
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
  );
}
