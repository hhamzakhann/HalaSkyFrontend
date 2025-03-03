"use server";

import { signIn, signOut } from "./auth";
import { AuthError } from "next-auth";

export async function handleGoogleSignIn() {
  await signIn("google", { redirectTo: "/" });
}

export async function handleCredientialSignIn({ email, password }) {
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/dashboard/user/profile",
    });
  } catch (err) {
    if (err instanceof AuthError) {
      switch (err.type) {
        case "CredentialsSignin":
          return { message: "Invalide Crediential." };
        default:
          return { message: "Something went wrong." };
      }
    }
    throw err;
  }
}

export async function handleSignOut() {
  await signOut({ redirectTo: "/login/admin" });
}
