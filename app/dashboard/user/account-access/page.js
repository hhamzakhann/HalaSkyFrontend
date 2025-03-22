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
import { BASE_URL } from "@/constant/constant";
import { auth, signOut } from "@/app/_lib/auth";
import { redirect } from "next/navigation";
import { handleSignOut } from "@/app/_lib/action";
import EditPasswordModal from "@/app/_components/modals/EditPasswordModal";

export const metadata = { title: "Users" };

const users = [
  {
    id: "01",
    name: "Robert Fox",
    email: "debra.holt@example.com",
    lastLogin: "02/11/2024",
    recoveryRequest: "02",
  },
  {
    id: "02",
    name: "Esther Howard",
    email: "nathan.roberts@example.com",
    lastLogin: "03/10/2024",
    recoveryRequest: "01",
  },
  {
    id: "03",
    name: "Leslie Alexander",
    email: "tanya.hill@example.com",
    lastLogin: "03/10/2024",
    recoveryRequest: "03",
  },
  {
    id: "03",
    name: "Theresa Webb",
    email: "nevaeh.simmons@example.com",
    lastLogin: "24/09/2024",
    recoveryRequest: "05",
  },
  {
    id: "04",
    name: "Arlene McCoy",
    email: "tim.jennings@example.com",
    lastLogin: "15/06/2024",
    recoveryRequest: "22",
  },
  {
    id: "05",
    name: "Kristin Watson",
    email: "kenzi.lawson@example.com",
    lastLogin: "20/05/2024",
    recoveryRequest: "06",
  },
];

const tableHeaderData = [
  "Id",
  "Name",
  "Email",
  "Last Login",
  "Recovery Request",
  "Action",
];

export default async function Page() {
  const session = await auth();
  let accessRecoveryList = [];

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${session.token}`);
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("pageNo", "1");
  urlencoded.append("status", "0");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  const response = await fetch(
    `${BASE_URL}/user/recovery-request-list`,
    requestOptions
  );
  const data = await response.json();
  if (data.status) {
    accessRecoveryList = data.data;
  }

  return (
    <div>
      <DashboardHeader title="User Account Access" />
      <DashboardMainContainer>
        {accessRecoveryList.length > 0 ? (
          <>
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
                        <TableHead className="text-white py-4 px-6" key={item}>
                          {item}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {accessRecoveryList.map((user) => (
                      <TableRow key={user.email}>
                        <TableCell className="py-4 px-6">{user.id}</TableCell>
                        <TableCell className="py-4 px-6">{user.name}</TableCell>
                        <TableCell className="py-4 px-6">
                          {user.email}
                        </TableCell>
                        <TableCell className="py-4 px-6">
                          {user.lastLogin || "pending"}
                        </TableCell>
                        <TableCell className="py-4 px-6">
                          {user.RecoveryRequests.length}
                        </TableCell>
                        <TableCell className="py-4 px-6">
                          <EditPasswordModal />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </>
        ) : (
          <p className="text-center">
            👋🏻 There are no memeber in Access Recovery List
          </p>
        )}
      </DashboardMainContainer>
    </div>
  );
}
