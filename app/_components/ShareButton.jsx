"use client";
import ButtonCustom from "./Button";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";

export default function ShareButton({ onClick = () => {} }) {
  return (
    <ButtonCustom
      type="roundedWhite"
      className="w-10 h-10 shadow-lg"
      variant="icon"
      onClick={onClick}
    >
      <HiOutlineArrowsRightLeft />
    </ButtonCustom>
  );
}
