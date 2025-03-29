import { NextResponse } from "next/server";

export async function POST(req) {
  const formData = await req.json();
  console.log("ROUTE HANDLER FORM DATA:::", formData);

  const response = NextResponse.json({ success: true });
  response.cookies.set("formData", JSON.stringify(formData), {
    httpOnly: true,
    // secure: process.env.NODE_ENV !== "production",
    maxAge: 60 * 60, // 1 hour
  });

  return response;
}
