import { BASE_URL } from "@/constant/constant";
import { handleSignOut } from "./action";
import { auth } from "./auth";

// getting user profile listing.
export async function getUserProfiles(statusId) {
  const session = await auth();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${session.user.token}`);
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  // if (statusId) {
  urlencoded.append("status", statusId);
  // }
  urlencoded.append("pageNo", "1");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  const response = await fetch(`${BASE_URL}/user/list`, requestOptions);

  const data = await response.json();

  if (data.status) {
    return data.activeUsers;
  }
}

export async function getBanUnbanUsers() {
  const session = await auth();
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${session.user.token}`);
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("pageNo", "1");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  const response = await fetch(
    `${BASE_URL}/user/user-violation-list`,
    requestOptions
  );
  const data = await response.json();

  if (data.status) {
    return data.data;
  }
}

export async function getRoleMember() {
  const session = await auth();
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${session.user.token}`);
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
  myHeaders.append("Authorization", `Bearer ${session.user.token}`);

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
  myHeaders.append("Authorization", `Bearer ${session.user.token}`);
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

  fetch(`${BASE_URL}/user/add-member`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}

// PENDING
export async function updateUserRole(newMember) {
  const session = await auth();
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${session.user.token}`);
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

  fetch(`${BASE_URL}/user/add-member`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}

export async function getBlogs(pageNo) {
  const session = await auth();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${session.user.token}`);
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  // if (statusId) urlencoded.append("status", statusId);
  urlencoded.append("pageNo", pageNo);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  try {
    const response = await fetch(`${BASE_URL}/blog/list`, requestOptions);
    const data = await response.json();
    if (data.status) {
      return data.data;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getPostComments() {
  const session = await auth();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${session.user.token}`);
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("pageNo", "1");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  const response = await fetch(`${BASE_URL}/activity/list`, requestOptions);

  const data = await response.json();
  if (data.status) {
    return data.data;
  }
}

export async function getFaqs() {
  const session = await auth();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${session.user.token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const response = await fetch(`${BASE_URL}/faq/list`, requestOptions);

  const data = await response.json();
  return data;
}

export async function getHotels({
  cityCode,
  countryCode,
  checkIn,
  checkout,
  adult,
  children,
  childAges,
}) {
  const session = await auth();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${session.user.token}`);
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    checkIn: checkIn,
    checkOut: checkout,
    cityCode,
    countryCode,
    rooms: [
      {
        Adults: Number(adult),
        Children: Number(children),
        ChildAges: Array.from({ length: children }, (_, i) =>
          Math.floor(Math.random() * (7 - 4) + 4)
        ).join(","),
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const response = await fetch(`${BASE_URL}/hotel/get`, requestOptions);
  const data = await response.json();
  return data;
}
