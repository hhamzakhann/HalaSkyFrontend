import { DashboardHeader } from "@/app/_components/UI";
import DashboardMainContainer from "@/app/_components/UI/DashboardMainContainer";
import Image from "next/image";
import LeftArrowIcon from "@/public/leftArrow-icon.svg";
import CreateBlogForm from "@/app/_components/forms/CreateBlogForm";
import { auth } from "@/app/_lib/auth";

export default async function page() {
  const {
    user: { name },
    ...others
  } = await auth();

  return (
    <div>
      <DashboardHeader
        title="Edit Blog"
        btnChild={<Image src={LeftArrowIcon} alt="navigation icon" />}
      />
      <DashboardMainContainer>
        <CreateBlogForm authorName={name} />
      </DashboardMainContainer>
    </div>
  );
}
