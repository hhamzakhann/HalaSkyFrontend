import { spartanFont } from "@/app/font";
import ButtonCustom from "@/app/_components/Button";
import Card from "@/app/_components/Card";
import { SelectInput } from "@/app/_components/formControls";
import SearchInput from "@/app/_components/formControls/SearchInput";
import WarningTempModal from "@/app/_components/modals/WarningTempModal";
import ModerationFilter from "@/app/_components/ModerationFilter";
import { BadgeCustom, DashboardHeader } from "@/app/_components/UI";
import DashboardMainContainer from "@/app/_components/UI/DashboardMainContainer";
import { Divider } from "antd";
import BlockActions from "./BlockActions";
import PostList from "./PostList";

export default async function Page() {
  return (
    <>
      <DashboardHeader title="Community Guidelines Enforcement Tools">
        <WarningTempModal />
      </DashboardHeader>
      <DashboardMainContainer>
        <div className="space-y-8 divide-slate-300">
          <div className="flex items-center gap-3 max-w-3xl">
            <SearchInput />
            <ModerationFilter />
          </div>
          <Divider />
          <div className="column-1 md:columns-2 lg:columns-2 xl:columns-3 gap-x-4 gap-y-4">
            <PostList />
          </div>
        </div>
      </DashboardMainContainer>
    </>
  );
}
