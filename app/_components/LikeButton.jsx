"use client";
import { HiOutlineHeart } from "react-icons/hi2";
import ButtonCustom from "./Button";

export default function LikeButton({ onClick }) {
  return (
    <ButtonCustom
      type="roundedWhite"
      className="w-10 h-10 shadow-lg"
      variant="icon"
      onClick={onClick}
    >
      <HiOutlineHeart />
    </ButtonCustom>
  );
}
