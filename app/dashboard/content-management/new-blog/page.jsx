import { DashboardHeader } from "@/app/_components/UI";
import DashboardMainContainer from "@/app/_components/UI/DashboardMainContainer";
import Image from "next/image";
import LeftArrowIcon from "@/public/leftArrow-icon.svg";
import CreateBlogForm from "@/app/_components/forms/CreateBlogForm";
import { auth } from "@/app/_lib/auth";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";

export default async function page() {
  const {
    user: { name },
    ...others
  } = await auth();

  return (
    <div>
      <DashboardHeader
        title="Create Blog"
        btnChild={<Image src={LeftArrowIcon} alt="navigation icon" />}
      />
      <DashboardMainContainer>
        <Suspense
          fallback={
            <div className="grid items-center justify-center">
              <Spinner />
            </div>
          }
        >
          <CreateBlogForm authorName={name} />
        </Suspense>
      </DashboardMainContainer>
    </div>
  );
}
