"use client";
import { HiOutlineHeart } from "react-icons/hi2";
import ButtonCustom from "./Button";

export default function LikeButton({ onClick }) {
  return (
    <ButtonCustom shape="circle" onClick={onClick}>
      <HiOutlineHeart />
    </ButtonCustom>
  );
}
