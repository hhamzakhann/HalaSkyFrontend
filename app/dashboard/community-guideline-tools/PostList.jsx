import Card from "@/app/_components/Card";
import TextExpander from "@/app/_components/TextExpander";
import { BadgeCustom } from "@/app/_components/UI";
import { getPostComments } from "@/app/_lib/data-service";

import BlockActions from "./BlockActions";

export default async function PostList({ searchParams }) {
  const data = await getPostComments();

  const postData = data.map(({ comments, ...rest }) => ({
    ...rest,
    type: "post",
  }));
  const comments = data.map((post) => ({ type: "comment" }));

  let posts = [];
  if (searchParams?.category === "posts") posts = postData;
  if (searchParams?.category === "comments") posts = comments;

  if (!searchParams?.category || searchParams?.category === "all")
    posts = [...postData, ...comments];

  return (
    <>
      {posts.map((post) => (
        <Card varient="large" className="inline-block w-full mb-6">
          <div className="flex items-center gap-3 flex-wrap mb-3">
            <BadgeCustom>Post</BadgeCustom>
            <BadgeCustom>Spam</BadgeCustom>
            <BadgeCustom>
              <img src="/flag-icon.svg" />
              03
            </BadgeCustom>
            <BadgeCustom>
              <img src="/bill-icon.svg" />
              02
            </BadgeCustom>
          </div>
          <figure className="space-y-4">
            <img src="/image-skeleton.jpg" />
            {post.description && (
              <figcaption className="text-sm font-light text-slate-600">
                <TextExpander>{post.description}</TextExpander>
              </figcaption>
            )}
            <BlockActions postId={post.id} />
          </figure>
        </Card>
      ))}
    </>
  );
}
