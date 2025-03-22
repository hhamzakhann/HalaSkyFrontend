import React, { useTransition } from "react";
import ButtonCustom from "../Button";
import { handleSignOut } from "@/app/_lib/action";
import { revalidatePath } from "next/cache";

export default function BtnSignout({ children, redirect }) {
  const [isPending, startTransition] = useTransition();

  const handleClick = function () {
    startTransition(async () => {
      await handleSignOut({ redirect });
    });
  };

  return (
    <ButtonCustom
      isPending={isPending}
      onClick={handleClick}
      variant="icons"
      type="accent"
      className="rounded-full p-4 text-sm font-light"
    >
      {children}
    </ButtonCustom>
  );
}
