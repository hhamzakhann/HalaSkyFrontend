import DropDown from "@/app/_components/formControls/DropDown";
import SearchInput from "@/app/_components/formControls/SearchInput";
import { DashboardHeader } from "@/app/_components/UI";
import UserTable from "@/app/_features/users/UserTable";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

import { DownOutlined, FilterOutlined } from "@ant-design/icons";
import { Edit, Search } from "lucide-react";
import ButtonCustom from "@/app/_components/Button";
import { Button } from "@/components/ui/button";
import DashboardMainContainer from "@/app/_components/UI/DashboardMainContainer";
import Image from "next/image";

import LeftArrowIcon from "@/public/leftArrow-icon.svg";
import { EditRoleAssignment } from "@/app/_components/forms";

export const metadata = { title: "Users" };

export default function Page() {
  return (
    <div>
      <DashboardHeader
        title="Edit Role Assignment"
        btnChild={<Image src={LeftArrowIcon} alt="left navigation icon" />}
      />
      <DashboardMainContainer>
        <div>
          <EditRoleAssignment />
        </div>
      </DashboardMainContainer>
    </div>
  );
}
