import { auth } from "./app/_lib/auth";
import { NextResponse } from "next/server";
import type, { NextRequest } from "next/server";

export function middleware(req) {
  const session = auth(); // Fetch the current session

  // If no session, redirect to login
  if (!session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const { pathname } = req.nextUrl;
  const userRole = session?.user?.Role?.title; // Ensure Role exists

  // Restrict "/dashboard" access to only admins
  if (pathname.startsWith("/dashboard") && userRole !== "admin") {
    return NextResponse.redirect(new URL("/", req.url)); // Redirect non-admins
  }

  return NextResponse.next(); // Allow access
}

// export const config = {
//   matcher: ["/dashboard/:path*"], // Apply middleware to dashboard routes
// };

export const config = {
  matcher: ["/dashboard/:path*"], // Apply middleware to dashboard routes
};
