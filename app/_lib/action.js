"use server";

import { BASE_URL } from "@/constant/constant";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { signUpSchema } from "./zod";

export async function generateToken(formData) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("email", formData.get("email"));

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  const response = await fetch(
    `${BASE_URL}/auth/generate-token`,
    requestOptions
  );
  const data = await response.json();

  return data;
}

export async function verifyOTP(email, otp) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("email", email);
  urlencoded.append("token", otp);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  const resp = await fetch(`${BASE_URL}/auth/verify-token`, requestOptions);
  const data = await resp.json();

  return data;
}

export async function handleUserSignUp(dataToLoad) {
  const validationResult = signUpSchema.safeParse(dataToLoad);
  if (!validationResult.success) {
    throw new Error("Invalid form data. Please check your inputs.");
  }

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("email", dataToLoad.email);
  urlencoded.append("password", dataToLoad.password);
  urlencoded.append("name", dataToLoad.name);
  urlencoded.append("number", dataToLoad.number);

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
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function handleGoogleSignIn() {
  await signIn("google", { redirectTo: "/" });
}

export async function handleCredientialSignIn({ email, password, redirectTo }) {
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: redirectTo,
    });
  } catch (err) {
    if (err instanceof AuthError) {
      switch (err.type) {
        case "CredentialsSignin":
          return { errorType: err.code, message: "Invalide Crediential." };
        default:
          return { message: "Something went wrong." };
      }
    }
    throw err;
  }
}

export async function handleSignOut({ redirect, pathToRevalidate = "/" }) {
  await signOut({ redirectTo: redirect });
  revalidatePath(pathToRevalidate);
}

export async function deleteBlogPost(blogId, userId) {
  const session = await auth();
  if (!session) throw new Error("You must be login.");

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${session.user.token}`);
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("id", blogId);
  urlencoded.append("userId", userId);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  const response = await fetch(`${BASE_URL}/blog/delete`, requestOptions);
  const data = await response.json();

  if (data.status) {
    revalidatePath("/dashboard/content-management");
  }
}

export async function publishBlogPost(blogId, status, userId) {
  const session = await auth();

  if (!session) throw new Error("You must be login.");

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${session.user.token}`);
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("blogId", blogId);
  urlencoded.append("status", status ? "1" : "0");
  urlencoded.append("userId", userId);

  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  const response = await fetch(
    `${BASE_URL}/blog/change-status`,
    requestOptions
  );
  const data = await response.json();
  if (data.status) {
    revalidatePath("/dashboard/content-management");
  }
}

export async function deletePost(postId) {
  const session = await auth();
  const userId = session.user.id;

  if (!session) throw new Error("You must be login.");

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${session.user.token}`);
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("id", postId);
  urlencoded.append("userId", userId);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  const response = await fetch(`${BASE_URL}/activity/delete`, requestOptions);
  const data = await response.json();
  if (data.status) {
    revalidatePath("/dashboard/post-comment-moderations");
  }
  return data;
}

export async function approvePost(postId) {
  const session = await auth();
  const userId = session.user.id;

  if (!session) throw new Error("You must be login.");

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  myHeaders.append("Authorization", `Bearer ${session.user.token}`);

  const urlencoded = new URLSearchParams();
  urlencoded.append("postId", postId);
  urlencoded.append("approvalStatus", "1");
  urlencoded.append("userId", userId);

  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  const response = await fetch(
    `${BASE_URL}/activity/approval-status`,
    requestOptions
  );

  if (response.status === 401) handleSignOut();
  const data = await response.json();
  if (data.status) revalidatePath("/dashboard/post-comment-moderations");
  return data;
}

export async function createCustomWarning(post, message) {
  const session = await auth();
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${session.user.token}`);
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("personId", post.added_by);
  urlencoded.append(
    "type",
    post.type.replace(post.type[0], post.type[0].toUpperCase())
  );
  urlencoded.append("id", post.id);
  urlencoded.append("reason", message);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  const response = await fetch(
    `${BASE_URL}/common/add-violation`,
    requestOptions
  );

  // if (response.status === 401) await handleSignOut();
  const responseData = await response.json();

  // if (responseData.status) {
  //   return responseData;
  // }
  return responseData;
}

export async function createRestriction(postId, type, restrictionTime) {
  const session = await auth();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${session.user.token}`);
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("postId", postId);
  urlencoded.append("restrictionType", type);
  if (type === 2) urlencoded.append("restrictionTime", restrictionTime);

  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  const response = await fetch(
    `${BASE_URL}/activity/change-restriction`,
    requestOptions
  );
  const data = await response.json();
  if (data.status) {
    return data;
  }
}

export async function createFaqs({ question, answer }) {
  const session = await auth();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${session.user.token}`);
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("question", question);
  urlencoded.append("answer", answer);
  urlencoded.append("userId", session.user.id);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  const response = await fetch(`${BASE_URL}/faq/add`, requestOptions);
  if (response.status === 401) await handleSignOut();
  const data = await response.json();

  return data;
}

export async function creatPoll({ title, description, question, options }) {
  const session = await auth();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${session.user.token}`);
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("title", title);
  urlencoded.append("description", description);
  urlencoded.append("question", question);
  options.forEach((option, index) => {
    urlencoded.append(`options[${index}]`, option);
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  const response = await fetch(`${BASE_URL}/poll`, requestOptions);
  if (response.status === 401) await handleSignOut();
  const data = await response.json();

  return data;
}
export async function getFlights(requestData) {
  const session = await auth();

  const myHeaders = new Headers();
  // myHeaders.append("Authorization", `Bearer ${session.user.token}`);
  myHeaders.append("Content-Type", "application/json");

  const jsonRequest = JSON.stringify(requestData);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: jsonRequest,
    redirect: "follow",
  };

  const response = await fetch(`${BASE_URL}/flight/get`, requestOptions);
  const data = await response.json();

  return data;

  // throw new Error("Something went wrong while getting flights");
}
