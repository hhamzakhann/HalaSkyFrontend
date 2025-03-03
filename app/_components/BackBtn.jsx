"use client";

import { useRouter } from "next/navigation";

export default function BackBtn({ className, children }) {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className={className}>
      {children}
    </button>
  );
}
