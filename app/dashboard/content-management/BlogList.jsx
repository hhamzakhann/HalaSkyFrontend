import { poppinsFont, spartanFont } from "@/app/font";
import Card from "@/app/_components/Card";
import DeleteBlogModal from "@/app/_components/modals/DeleteBlogModal";
import { getBlogs } from "@/app/_lib/data-service";
import { Button } from "@/components/ui/button";
import { BASE_URL } from "@/constant/constant";
import Image from "next/image";

import EditBlogButton from "@/app/_components/actionButtons/EditBlogButton";
import PublishBlogBtn from "@/app/_components/actionButtons/PublishBlogBtn";
import { auth } from "@/app/_lib/auth";

export default async function BlogList({ searchParams }) {
  const session = await auth();

  const pageNo = searchParams.pageNo || 1;
  const blogs = await getBlogs(pageNo);

  return (
    <>
      <p className="mb-3 font-medium text-sm text-gray">
        {blogs.length} Blogs Found
      </p>
      <div className="space-y-4 overflow-auto">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <Card
              varient="large"
              className="grid grid-cols-1 xl:grid-cols-[70fr_30fr] gap-14 shadow-none border border-slate-200"
            >
              <div className="grid sm:grid-cols-[250px_1fr] gap-5">
                <div className="relative h-56 rounded-xl overflow-hidden">
                  <Image
                    fill
                    className="object-cover"
                    // src="/image-skeleton.jpg"
                    src={`${BASE_URL}/${blog.image}`}
                    unoptimized
                  />
                </div>
                <div className={`flex flex-col ${spartanFont.className}`}>
                  <div className="space-y-2">
                    <h2 className="font-medium text-2xl">{blog.title}</h2>
                    <h3 className="font-light text-sm flex items-center gap-2">
                      Author{" "}
                      <span className="bg-accent rounded-full w-1 h-1 inline-block"></span>{" "}
                      {blog.category.title}
                    </h3>
                    <p
                      className={`${poppinsFont.className} font-light text-sm text-slate-600 leading-7`}
                    >
                      Its not only writers who can benefit from this free online
                      tool. If youre a programmer whos working on a project
                      where blocks of text are needed, this tool can be a great
                      way to get that. Its a good way to test your programming
                      and that the tool being
                    </p>
                  </div>
                  <p className="mt-auto font-light text-sm">
                    {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-[auto_auto_auto] gap-5 h-full content-center justify-center">
                  <EditBlogButton blog={blog} />
                  <DeleteBlogModal
                    blogId={blog.id}
                    userId={session?.user?.id}
                  />
                  <Button
                    variant="secondary"
                    size="icon"
                    className="text-base font-normal"
                  >
                    <img src="/eye-icon.svg" />
                  </Button>
                  <PublishBlogBtn
                    is_published={blog.is_published}
                    blogId={blog.id}
                    userId={session.user.id}
                  />
                  <div className="col-span-full flex items-center justify-between font-light text-sm">
                    <span className="flex items-center gap-2">
                      <img src="/impressions-icon.svg" />
                      105 Click
                    </span>
                    <span className="flex items-center gap-2">
                      <img src="/impressions-icon.svg" />
                      1,902 Impression
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <p>There are no blog to show here</p>
        )}
      </div>
    </>
  );
}
