import { NextResponse } from "next/server";

let formDataStore = null; // Temporary store

export async function POST(req) {
  formDataStore = await req.json(); // Store form data in memory
  return NextResponse.json({ success: true });
}

export function getFormData() {
  return formDataStore; // Function to access data in the server component
}
