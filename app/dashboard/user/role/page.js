import { DashboardHeader } from "@/app/_components/UI";
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
import { Search } from "lucide-react";
import ButtonCustom from "@/app/_components/Button";
import DashboardMainContainer from "@/app/_components/UI/DashboardMainContainer";
import Image from "next/image";
import editIcon from "@/public/edit-icon.svg";
import trashIcon from "@/public/trash-icon.svg";
import Link from "next/link";
import userIcon from "@/public/user-icon.svg";
import AddMemberBtn from "@/app/_components/AddMemberBtn";
import DeleteMemberBtn from "@/app/_components/DeleteMemberBtn";
import { auth } from "@/app/_lib/auth";
import { BASE_URL } from "@/constant/constant";
import { getRoleMember, getRoles } from "@/app/_lib/data-service";
import { formatDate } from "@/app/_lib/utils";

export const metadata = { title: "Users" };

const tableHeaderData = [
  "Id",
  "Team Member Name",
  "Email",
  "Role",
  "Assigned Date",
  "Actions",
];

const filteredData = [
  { key: "Moderator", value: "moderator" },
  { key: "Support", value: "support" },
  { key: "Admin", value: "admin" },
];

export default async function Page() {
  // GETTING ALL MEMBERS.
  const members = await getRoleMember();

  // GETTING APPLICATION USER DEFINED ROLE.
  const roles = await getRoles();

  return (
    <div>
      <DashboardHeader
        title="Role Assignment"
        icon={<Image src={userIcon} />}
      />
      <DashboardMainContainer>
        {members.length > 0 ? (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="relative w-full min-w-72 max-w-xl">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <Input className="pl-10" placeholder="Search" />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-40 ">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem key="All" value="all">
                      All
                    </SelectItem>
                    {roles.map((role) => (
                      <SelectItem key={role.id} value={role.id}>
                        {role.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <AddMemberBtn />
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
                          key={item}
                          className="text-white py-4 px-6 w-auto whitespace-nowrap"
                        >
                          {item}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {members.map((user) => (
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
                          <Select
                            defaultValue={user?.Roles[0].UserRole?.role_id}
                          >
                            <SelectTrigger className="w-full border-none shadow-none">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {roles.map((role) => (
                                <SelectItem key={role.id} value={role.id}>
                                  {role.title}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </TableCell>
                        {/* <TableCell className="py-4 px-6 w-auto whitespace-nowrap">
                          {user.permissions}
                        </TableCell> */}
                        <TableCell className="py-4 px-6 w-auto whitespace-nowrap">
                          {user.assignedDated}
                          {formatDate(user?.Roles[0]?.UserRole?.updated_at)}
                        </TableCell>
                        <TableCell className="py-4 px-6 w-auto whitespace-nowrap">
                          <div className="flex items-center gap-3">
                            <Link href={`role/edit/${user.id}`}>
                              <Image src={editIcon} />
                            </Link>
                            <DeleteMemberBtn />
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center">👋🏻 No item found in the list</p>
        )}
      </DashboardMainContainer>
    </div>
  );
}
