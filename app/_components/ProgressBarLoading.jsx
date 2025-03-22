"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; // Import default styles

NProgress.configure({ showSpinner: false });

export default function ProgressBarLoading() {
  const pathname = usePathname(); // Get the current route

  useEffect(() => {
    NProgress.start(); // Start the progress bar when route starts changing

    // Using a small delay to ensure the new route is loaded before stopping
    const timer = setTimeout(() => {
      NProgress.done();
    }, 500); // Adjust delay if needed

    return () => {
      clearTimeout(timer); // Cleanup timeout on unmount
    };
  }, [pathname]); // Runs every time the pathname changes

  return null; // No UI, just triggers NProgress
}
