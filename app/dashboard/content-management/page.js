import { DashboardHeader } from "@/app/_components/UI";
import DashboardMainContainer from "@/app/_components/UI/DashboardMainContainer";
import { Input } from "@/components/ui/input";
import contentMangementTitleIcon from "@/public/contentMangementTitleIcon.png";
import { Search } from "lucide-react";
import Image from "next/image";

import Spinner from "@/app/_components/Spinner";
import { Suspense } from "react";
import BlogList from "./BlogList";
import AddBlogBtn from "@/app/_components/actionButtons/AddBlogBtn";

export default async function Page({ searchParams }) {
  return (
    <div>
      <DashboardHeader
        title="Content Management"
        icon={<Image src={contentMangementTitleIcon} alt="icon image" />}
      >
        <div className="relative min-w-lg">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input className="pl-10" placeholder="Search" />
        </div>
        <AddBlogBtn />
      </DashboardHeader>
      <DashboardMainContainer>
        <Suspense
          fallback={
            <div className="grid items-center justify-center">
              <Spinner />
            </div>
          }
        >
          <BlogList searchParams={searchParams} />
        </Suspense>
      </DashboardMainContainer>
    </div>
  );
}
