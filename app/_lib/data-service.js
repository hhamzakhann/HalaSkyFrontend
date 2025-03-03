import { BASE_URL } from "@/constant/constant";
import { auth } from "./auth";

// getting user profile listing.
export async function getUserProfiles() {
  const session = await auth();
  console.log("USER TOKEN", session.token);

  const formdata = new FormData();
  formdata.append("pageNo", "1");

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
    Authorization: `Bearer ${session.token}`,
  };

  try {
    const response = await fetch(`${BASE_URL}/user/activeUser`, requestOptions);
    console.log("ACTUAL RESP", response);
    const data = await response.json();
    console.log("RESP DATA", data);
  } catch (error) {
    console.error("RESP ERROR", error);
  }
}

export async function getRoleMember() {
  const session = await auth();
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${session.token}`);
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("pageNo", "1");
  urlencoded.append("status", "1");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `${BASE_URL}/user/get-members`,
      requestOptions
    );
    const data = await response.json();

    if (data.status) {
      return data.members;
    }
  } catch (error) {
    console.log("ERROR ON ROLE ASSIGNMENT", error);
  }
}

export async function getRoles() {
  const session = await auth();
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${session.token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const response = await fetch(`${BASE_URL}/user/roles-list`, requestOptions);
  const data = await response.json();

  try {
    if (data.status) {
      return data.roles.map((role) => ({
        ...role,
        title: role.title.replace("_", " "),
      }));
    }
  } catch (error) {
    console.error(error);
  }
}

export async function addMember(newMember) {
  const session = await auth();
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${session.token}`);
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const { name, email, role } = newMember;

  const urlencoded = new URLSearchParams();
  urlencoded.append("name", name);
  urlencoded.append("email", email);
  urlencoded.append("roleId", role);
  urlencoded.append("userId", "3");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  fetch("http://localhost:3005/user/add-member", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}

// PENDING
export async function updateUserRole(newMember) {
  const session = await auth();
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${session.token}`);
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const { name, email, role } = newMember;

  const urlencoded = new URLSearchParams();
  urlencoded.append("name", name);
  urlencoded.append("email", email);
  urlencoded.append("roleId", role);
  urlencoded.append("userId", "3");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  fetch("http://localhost:3005/user/add-member", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}
