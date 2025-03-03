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
import editIcon from "@/public/edit-icon.svg";
import trashIcon from "@/public/trash-icon.svg";
import Link from "next/link";

import LeftArrowIcon from "@/public/LeftArrow-icon.svg";
import { EditRoleAssignment } from "@/app/_components/forms";

export const metadata = { title: "Users" };

const users = [
  {
    id: "01",
    name: "Robert Fox",
    roles: [
      { key: "Moderator", value: "moderator" },
      { key: "Support", value: "support" },
      { key: "Admin", value: "admin" },
    ],
    email: "debra.holt@example.com",

    permissions: "Can Ban",
    recoveryRequest: "02",
    reason: "Booking cancelled 2 Times",
    assignedDated: "02/10/2024",
  },
  {
    id: "02",
    name: "Esther Howard",
    roles: [
      { key: "Moderator", value: "moderator" },
      { key: "Support", value: "support" },
      { key: "Admin", value: "admin" },
    ],
    email: "nathan.roberts@example.com",
    lastLogin: "03/10/2024",
    recoveryRequest: "01",
    reason: "Booking cancelled 2 Times",
    assignedDated: "02/10/2024",
    permissions: "Can Ban",
  },
  {
    id: "03",
    name: "Leslie Alexander",
    email: "tanya.hill@example.com",
    lastLogin: "03/10/2024",
    recoveryRequest: "03",
    reason: "Booking cancelled 2 Times",
    assignedDated: "02/10/2024",
    permissions: "Can Ban",
    roles: [
      { key: "Moderator", value: "moderator" },
      { key: "Support", value: "support" },
      { key: "Admin", value: "admin" },
    ],
  },
  {
    id: "03",
    name: "Theresa Webb",
    email: "nevaeh.simmons@example.com",
    lastLogin: "24/09/2024",
    recoveryRequest: "05",
    reason: "Booking cancelled 2 Times",
    assignedDated: "02/10/2024",
    permissions: "Can Ban",
    roles: [
      { key: "Moderator", value: "moderator" },
      { key: "Support", value: "support" },
      { key: "Admin", value: "admin" },
    ],
  },
  {
    id: "04",
    name: "Arlene McCoy",
    email: "tim.jennings@example.com",
    lastLogin: "15/06/2024",
    recoveryRequest: "22",
    reason: "Booking cancelled 2 Times",
    assignedDated: "02/10/2024",
    permissions: "Can Ban",
    roles: [
      { key: "Moderator", value: "moderator" },
      { key: "Support", value: "support" },
      { key: "Admin", value: "admin" },
    ],
  },
  {
    id: "05",
    name: "Kristin Watson",
    email: "kenzi.lawson@example.com",
    lastLogin: "20/05/2024",
    recoveryRequest: "06",
    reason: "Booking cancelled 2 Times",
    assignedDated: "02/10/2024",
    permissions: "Can Ban",
    roles: [
      { key: "Moderator", value: "moderator" },
      { key: "Support", value: "support" },
      { key: "Admin", value: "admin" },
    ],
  },
];

const tableHeaderData = [
  "Id",
  "Team Member Name",
  "Email",
  "Role",
  "Assigned Permissions",
  "Assigned Date",
  "Actions",
];

export default function Page() {
  return (
    <div>
      <DashboardHeader
        title="Edit Role Assignment"
        btnChild={<Image src={LeftArrowIcon} />}
      />
      <DashboardMainContainer>
        <div>
          <EditRoleAssignment />
        </div>
      </DashboardMainContainer>
    </div>
  );
}
