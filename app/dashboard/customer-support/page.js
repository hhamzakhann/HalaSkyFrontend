import { BadgeCustom, DashboardHeader } from "@/app/_components/UI";
import DashboardMainContainer from "@/app/_components/UI/DashboardMainContainer";
import SearchInput from "@/app/_components/formControls/SearchInput";
import ModerationFilter from "@/app/_components/ModerationFilter";
import Card from "@/app/_components/Card";
import { Divider } from "antd";
import LinkButton from "@/app/_components/LinkButton";
import ButtonCustom from "@/app/_components/Button";
import Media from "@/app/_components/Media";
import { MonthPicker } from "@/app/_components/MonthPicker";
import listIcon from "@/public/list-icon.svg";

export default function Page() {
  return (
    <>
      <DashboardHeader title="Customer Support & Help Desk">
        <MonthPicker classWrapper="ml-auto" />
      </DashboardHeader>
      <DashboardMainContainer>
        <div className="divide-slate-300 flex flex-col md:flex-row items-center justify-between">
          <Media title="Total Complains" number="1,256" icon={listIcon} />
          <Media title="Complains Resolved" number="885" />
          <Media title="Complains Inprogress" number="300" />
          <Media title="Complains Escalated" number="71" />
        </div>
      </DashboardMainContainer>
    </>
  );
}
