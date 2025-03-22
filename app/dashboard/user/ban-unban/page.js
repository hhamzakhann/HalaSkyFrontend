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
import { Search } from "lucide-react";
import ButtonCustom from "@/app/_components/Button";
import { Button } from "@/components/ui/button";
import DashboardMainContainer from "@/app/_components/UI/DashboardMainContainer";
import { Tag } from "antd";
import Image from "next/image";
import userIcon from "@/public/user-icon.svg";
import { getBanUnbanUsers } from "@/app/_lib/data-service";

export const metadata = { title: "Users" };

const users = [
  {
    id: "01",
    name: "Robert Fox",
    email: "debra.holt@example.com",
    lastLogin: "02/11/2024",
    recoveryRequest: "02",
    reason: "Booking cancelled 2 Times",
    lastActiveDate: "02/10/2024",
  },
  {
    id: "02",
    name: "Esther Howard",
    email: "nathan.roberts@example.com",
    lastLogin: "03/10/2024",
    recoveryRequest: "01",
    reason: "Booking cancelled 2 Times",
    lastActiveDate: "02/10/2024",
  },
  {
    id: "03",
    name: "Leslie Alexander",
    email: "tanya.hill@example.com",
    lastLogin: "03/10/2024",
    recoveryRequest: "03",
    reason: "Booking cancelled 2 Times",
    lastActiveDate: "02/10/2024",
  },
  {
    id: "03",
    name: "Theresa Webb",
    email: "nevaeh.simmons@example.com",
    lastLogin: "24/09/2024",
    recoveryRequest: "05",
    reason: "Booking cancelled 2 Times",
    lastActiveDate: "02/10/2024",
  },
  {
    id: "04",
    name: "Arlene McCoy",
    email: "tim.jennings@example.com",
    lastLogin: "15/06/2024",
    recoveryRequest: "22",
    reason: "Booking cancelled 2 Times",
    lastActiveDate: "02/10/2024",
  },
  {
    id: "05",
    name: "Kristin Watson",
    email: "kenzi.lawson@example.com",
    lastLogin: "20/05/2024",
    recoveryRequest: "06",
    reason: "Booking cancelled 2 Times",
    lastActiveDate: "02/10/2024",
  },
];

const tableHeaderData = [
  "Id",
  "Name",
  "Email",
  "Account Status",
  "Violations Count",
  "Reason",
  "Last Active",
  "Action",
];

export default async function Page() {
  const users = await getBanUnbanUsers();

  return (
    <div>
      <DashboardHeader title="User Ban/UnBan" icon={<Image src={userIcon} />} />
      <DashboardMainContainer>
        <div className="flex items-center justify-between mb-4">
          <div className="relative w-full max-w-lg">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input className="pl-10" placeholder="Search" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Page</span>
            <Select defaultValue="1">
              <SelectTrigger className="w-20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[...Array(10)].map((_, i) => (
                  <SelectItem key={i + 1} value={String(i + 1)}>
                    {i + 1}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <span className="text-sm text-gray-600">of 10</span>
          </div>
        </div>

        <div>
          <div className="rounded-lg border bg-white overflow-hidden ">
            <Table className="font-normal">
              <TableHeader className="bg-[#15193c] text-white ">
                <TableRow className="px-3">
                  {tableHeaderData.map((item) => (
                    <TableHead
                      className="text-white py-4 px-6 w-auto whitespace-nowrap"
                      key={item}
                    >
                      {item}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.email}>
                    <TableCell className="py-4 px-6 w-auto whitespace-nowrap">
                      {user.id}
                    </TableCell>
                    <TableCell className="py-4 px-6 w-auto whitespace-nowrap">
                      {user.name}
                    </TableCell>
                    <TableCell className="py-4 px-6 w-auto whitespace-nowrap">
                      {user.email}
                    </TableCell>
                    <TableCell className="py-4 px-6 w-auto whitespace-nowrap">
                      <Tag
                        color="green"
                        style={{
                          paddingInline: "8px",
                          paddingBlock: "10px",
                          border: "none",
                          fontSize: "0.9rem",
                        }}
                      >
                        Active
                      </Tag>
                    </TableCell>
                    <TableCell className="py-4 px-6 w-auto whitespace-nowrap">
                      {user.violation_count}
                    </TableCell>
                    <TableCell className="py-4 px-6 w-auto whitespace-nowrap">
                      {user.violations.length || "--"}
                    </TableCell>
                    <TableCell className="py-4 px-6 w-auto whitespace-nowrap">
                      {user.lastActiveDate || "--"}
                    </TableCell>
                    <TableCell className="py-4 px-6 w-auto whitespace-nowrap">
                      <ButtonCustom className="font-normal" variant="link">
                        Reset Password
                      </ButtonCustom>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </DashboardMainContainer>
    </div>
  );
}
