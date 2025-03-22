import { spartanFont } from "@/app/font";
import ButtonCustom from "@/app/_components/Button";
import CreateFaqModal from "@/app/_components/modals/CreateFaqModal";
import { DashboardHeader } from "@/app/_components/UI";

import DashboardMainContainer from "@/app/_components/UI/DashboardMainContainer";
import { Suspense } from "react";
import Faqs from "./Faqs";
import FAQSkeletons from "./FAQSkeletons";

export default async function Page() {
  return (
    <>
      <DashboardHeader title="Automated FAQ Management">
        <CreateFaqModal />
      </DashboardHeader>
      <DashboardMainContainer>
        <Suspense fallback={<FAQSkeletons />}>
          <Faqs />
        </Suspense>
      </DashboardMainContainer>
    </>
  );
}
