import Image from "next/image";
import { Tag } from "antd";
import { redirect } from "next/navigation";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DashboardMainContainer from "@/app/_components/UI/DashboardMainContainer";
import userProfileImage from "@/public/user-profile-image.png";
import { DashboardHeader } from "@/app/_components/UI";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import userIcon from "@/public/user-icon.svg";
import { auth } from "@/app/_lib/auth";
import {
  getFilteredUserProfiles,
  getUserProfiles,
} from "@/app/_lib/data-service";
import { BASE_URL } from "@/constant/constant";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDate } from "@/app/_lib/utils";
import Filter from "./Filter";

const tableHeaderData = [
  "Id",
  "Profile Image",
  "Name",
  "Email",
  "Registration date",
  "Account status",
];

export default async function UserProfilePage({ searchParams }) {
  let userData;
  const { filterBy } = searchParams;
  userData = await getUserProfiles(filterBy);

  return (
    <>
      <DashboardHeader title="User Profile" icon={<Image src={userIcon} />} />
      <DashboardMainContainer>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 w-lg">
            <div className="relative min-w-lg">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input className="pl-10" placeholder="Search" />
            </div>
            <Filter />
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
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-blueDark text-white hover:bg-blueDark">
                {tableHeaderData.map((item) => (
                  <TableHead className="text-white py-4 px-6" key={item}>
                    {item}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {userData.map((data) => (
                <TableRow key={data.id}>
                  <TableCell className="py-4 px-6">{data.id}</TableCell>
                  <TableCell className="py-4 px-6">
                    {data.platform_image || (
                      <Avatar>
                        <AvatarImage
                          src={data.platform_image}
                          alt="user avatar"
                        />
                        <AvatarFallback>
                          {data.name
                            .split(" ")
                            .map((word) => word[0])
                            .join("")
                            .toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </TableCell>
                  <TableCell className="py-4 px-6">{data.name}</TableCell>
                  <TableCell className="py-4 px-6">{data.email}</TableCell>
                  <TableCell className="py-4 px-6">
                    {formatDate(data.created_at)}
                  </TableCell>
                  <TableCell className="py-4 px-6 ">
                    {data.status === 1 ? (
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
                    ) : (
                      <Tag
                        color="red"
                        style={{
                          paddingInline: "8px",
                          paddingBlock: "10px",
                          border: "none",
                          fontSize: "0.9rem",
                        }}
                      >
                        Banned
                      </Tag>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </DashboardMainContainer>
    </>
  );
}
