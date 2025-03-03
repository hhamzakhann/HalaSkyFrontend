"use client";

import { PasswordInput } from "@/app/_components/formControls/PasswordInput";
import { Input } from "@/components/ui/input";

import ButtonCustom from "@/app/_components/Button";
import googleIcon from "@/public/google-icon.svg";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { BASE_URL } from "@/constant/constant";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();
  const { handleSubmit, register } = useForm();

  const onSubmit = async function (data) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("email", data.email);
    urlencoded.append("password", data.password);
    urlencoded.append("name", data.name);
    urlencoded.append("number", data.number);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    try {
      const resp = await fetch(`${BASE_URL}/auth/register`, requestOptions);
      if (!resp.ok) toast.error("Something went wrong.");

      const data = await resp.json();
      if (data.status === false) {
        toast.error(data.message);
        return;
      }

      if (data.status) {
        toast.success(data.message);
        router.push("/verify-password");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="Name" type="text" {...register("name")} />
      <Input placeholder="Number" type="number" {...register("number")} />
      <Input placeholder="Email" type="email" {...register("email")} />
      <PasswordInput register={register} name="password" />
      <PasswordInput placeholder="Confirm Password" />
      <div className="space-y-4">
        <ButtonCustom varient="accent" htmlType="submit">
          Sign Up
        </ButtonCustom>
        <ButtonCustom className="w-full">
          <img src={googleIcon} />
          <span>Login with Google</span>
        </ButtonCustom>
      </div>
    </form>
  );
}
