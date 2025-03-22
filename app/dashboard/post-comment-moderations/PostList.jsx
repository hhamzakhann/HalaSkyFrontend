import { getPostComments } from "@/app/_lib/data-service";
import Card from "@/app/_components/Card";
import { BadgeCustom } from "@/app/_components/UI";
import LinkButton from "@/app/_components/LinkButton";
import ButtonCustom from "@/app/_components/Button";
import TextExpander from "@/app/_components/TextExpander";
import { Button } from "@/components/ui/button";
import DeletePostBtn from "@/app/_components/actionButtons/DeletePostBtn";
import PostApprovalBtn from "@/app/_components/actionButtons/PostApprovalBtn";
import CreateCustomWarningModal from "@/app/_components/modals/CreateCustomWarningModal";

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
    <div className="columns-3 gap-x-4 gap-y-4">
      {posts.map((post) => (
        <Card varient="large" className="inline-block w-full mb-6">
          <div className="flex items-center gap-3 flex-wrap mb-3">
            <BadgeCustom>
              {post.type === "post" ? "Post" : "Comment"}
            </BadgeCustom>
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
            <div className="grid md:grid-cols-2 gap-3">
              <DeletePostBtn postId={post.id} />
              <PostApprovalBtn postId={post.id} />
              <CreateCustomWarningModal post={post} />
            </div>
          </figure>
        </Card>
      ))}
    </div>
  );
}
