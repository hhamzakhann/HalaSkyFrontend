"use client";

import Image from "next/image";
import React from "react";
import ButtonCustom from "./Button";
import trashIcon from "@/public/trash-icon.svg";

export default function DeleteMemberBtn() {
  return (
    <ButtonCustom varient="iconBtn">
      <Image src={trashIcon} alt="trash icon" />
    </ButtonCustom>
  );
}
