"use client";

import addUserIcon from "@/public/addUser-icon.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ButtonCustom from "./Button";

export default function AddMemberBtn() {
  const router = useRouter();
  return (
    <ButtonCustom
      varient="outline"
      onClick={() => router.push("/dashboard/user/role/add-member")}
    >
      <Image src={addUserIcon} alt="add user icon" />
      <span>Add member +</span>
    </ButtonCustom>
  );
}
