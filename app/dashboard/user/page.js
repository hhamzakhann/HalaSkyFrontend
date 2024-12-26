import DropDown from "@/app/_components/formControls/DropDown";
import SearchInput from "@/app/_components/formControls/SearchInput";
import { DashboardHeader } from "@/app/_components/UI";
import UserTable from "@/app/_features/users/UserTable";
import { DownOutlined, FilterOutlined } from "@ant-design/icons";

export const metadata = { title: "Users" };

export default function Page() {
  return (
    <div>
      <DashboardHeader title="User Profile" />
      <div className="px-10 pt-8">
        <div className="flex items-center gap-4 mb-4">
          <SearchInput />
          <DropDown>
            <span className="flex gap-3">
              <FilterOutlined />
              <span className="flex gap-2">
                <span>Active</span>
                <DownOutlined />
              </span>
            </span>
          </DropDown>
        </div>

        <div>
          <UserTable />
        </div>
      </div>
    </div>
  );
}
