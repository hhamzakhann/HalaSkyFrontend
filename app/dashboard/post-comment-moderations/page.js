import { BadgeCustom, DashboardHeader } from "@/app/_components/UI";
import DashboardMainContainer from "@/app/_components/UI/DashboardMainContainer";
import SearchInput from "@/app/_components/formControls/SearchInput";
import ModerationFilter from "@/app/_components/ModerationFilter";

import { Divider } from "antd";
import LinkButton from "@/app/_components/LinkButton";
import ButtonCustom from "@/app/_components/Button";
import { getPostComments } from "@/app/_lib/data-service";
import WarningTempModal from "@/app/_components/modals/WarningTempModal";
import PostList from "./PostList";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import PostCommentCardSkeletons from "./PostCommentCardSkeletons";

export default async function Page({ searchParams }) {
  return (
    <>
      <DashboardHeader title="Post & Comment Moderation">
        <WarningTempModal />
      </DashboardHeader>
      <DashboardMainContainer>
        <div className="space-y-8 divide-slate-300">
          <div className="flex items-center gap-3 max-w-3xl">
            <SearchInput />
            <ModerationFilter />
          </div>
          <Divider />
          <Suspense fallback={<PostCommentCardSkeletons />}>
            <PostList searchParams={searchParams} />
          </Suspense>
        </div>
      </DashboardMainContainer>
    </>
  );
}
