"use client";
import ButtonCustom from "./Button";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";

export default function ShareButton({ onClick = () => {} }) {
  return (
    <ButtonCustom shape="circle" onClick={onClick}>
      <HiOutlineArrowsRightLeft />
    </ButtonCustom>
  );
}
