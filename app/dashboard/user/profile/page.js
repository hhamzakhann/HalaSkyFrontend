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
import { getUserProfiles } from "@/app/_lib/data-service";
import { BASE_URL } from "@/constant/constant";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDate } from "@/app/_lib/utils";

// const userData = [
//   {
//     id: "01",
//     profileImage: (
//       <div>
//         <Image src={userProfileImage} />
//       </div>
//     ),
//     name: "Briana Lawrance",
//     email: "briana01@gmail.com",
//     registrationData: "5/30/14",
//     accountStatus: "active",
//   },
//   {
//     id: "02",
//     profileImage: (
//       <div>
//         <Image src={userProfileImage} />
//       </div>
//     ),
//     name: "Briana Lawrance",
//     email: "briana01@gmail.com",
//     registrationData: "5/30/14",
//     accountStatus: "active",
//   },
//   {
//     id: "03",
//     profileImage: (
//       <div>
//         <Image src={userProfileImage} />
//       </div>
//     ),
//     name: "Briana Lawrance",
//     email: "briana01@gmail.com",
//     registrationData: "5/30/14",
//     accountStatus: "in-active",
//   },
//   {
//     id: "04",
//     profileImage: (
//       <div>
//         <Image src={userProfileImage} />
//       </div>
//     ),
//     name: "Briana Lawrance",
//     email: "briana01@gmail.com",
//     registrationData: "5/30/14",
//     accountStatus: "active",
//   },
//   {
//     id: "05",
//     profileImage: (
//       <div>
//         <Image src={userProfileImage} />
//       </div>
//     ),
//     name: "Briana Lawrance",
//     email: "briana01@gmail.com",
//     registrationData: "5/30/14",
//     accountStatus: "active",
//   },
//   {
//     id: "06",
//     profileImage: (
//       <div>
//         <Image src={userProfileImage} />
//       </div>
//     ),
//     name: "Briana Lawrance",
//     email: "briana01@gmail.com",
//     registrationData: "5/30/14",
//     accountStatus: "active",
//   },
//   {
//     id: "07",
//     profileImage: (
//       <div>
//         <Image src={userProfileImage} />
//       </div>
//     ),
//     name: "Briana Lawrance",
//     email: "briana01@gmail.com",
//     registrationData: "5/30/14",
//     accountStatus: "active",
//   },
//   {
//     id: "08",
//     profileImage: (
//       <div>
//         <Image src={userProfileImage} alt="user profile" />
//       </div>
//     ),
//     name: "Briana Lawrance",
//     email: "briana01@gmail.com",
//     registrationData: "5/30/14",
//     accountStatus: "active",
//   },
//   {
//     id: "09",
//     profileImage: (
//       <div>
//         <Image src={userProfileImage} alt="user profile" />
//       </div>
//     ),
//     name: "Briana Lawrance",
//     email: "briana01@gmail.com",
//     registrationData: "5/30/14",
//     accountStatus: "active",
//   },
// ];

const filterData = [
  { label: "Active", value: "active" },
  { label: "Banned", value: "banned" },
];

const tableHeaderData = [
  "Id",
  "Profile Image",
  "Name",
  "Email",
  "Registration date",
  "Account status",
];

export default async function UserProfilePage({ params }) {
  console.log(params);
  const session = await auth();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${session.token}`);
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("pageNo", "1");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  const response = await fetch(`${BASE_URL}/user/active`, requestOptions);

  // Handle 401 Unauthorized
  if (response.status === 401) {
    redirect("/login/admin");
  }

  // Check for other errors
  if (!response.ok) {
    throw new Error(`API Error: ${response.status} - ${response.statusText}`);
  }

  const data = await response.json();
  const userData = data.activeUsers;

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
            <Select defaultValue="1">
              <SelectTrigger className="w-35 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                  />
                </svg>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem key="1" value="1">
                  Active
                </SelectItem>
                <SelectItem key="0" value="0">
                  Banned
                </SelectItem>
              </SelectContent>
            </Select>
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
