import React from "react";

export default function LoaderButton() {
  const [isPending, startTransition] = useTransition();
  const handleClick = () => {
    try {
      startTransition(() => deletePost(postId, userId));
    } catch (error) {
      console.error("Failed to delete blog post:", error);
    }
  };
  return <div>LoaderButton</div>;
}
