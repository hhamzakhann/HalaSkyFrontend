import { DashboardHeader } from "@/app/_components/UI";
import DashboardMainContainer from "@/app/_components/UI/DashboardMainContainer";
import Image from "next/image";

import LeftArrowIcon from "@/public/leftArrow-icon.svg";

import AddMember from "@/app/_components/forms/AddMember";
import { getRoles } from "@/app/_lib/data-service";

export const metadata = { title: "Users" };

export default async function Page() {
  const roles = await getRoles();
  return (
    <div>
      <DashboardHeader
        title="Add Member"
        btnChild={<Image src={LeftArrowIcon} alt="navigation icon" />}
      />
      <DashboardMainContainer>
        <div>
          <AddMember roles={roles} />
        </div>
      </DashboardMainContainer>
    </div>
  );
}
