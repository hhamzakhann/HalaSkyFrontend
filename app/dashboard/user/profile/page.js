import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DashboardHeader } from "@/app/_components/UI";
import DashboardMainContainer from "@/app/_components/UI/DashboardMainContainer";
import Image from "next/image";
import userProfileImage from "@/public/user-profile-image.png";
import { Tag } from "antd";
import Pagination from "@/app/_components/Pagination";
import { SelectInputShad } from "@/app/_components/formControls/SelectInputShad";
import SearchInput from "@/app/_components/formControls/SearchInput";

const userData = [
  {
    id: "01",
    profileImage: (
      <div>
        <Image src={userProfileImage} />
      </div>
    ),
    name: "Briana Lawrance",
    email: "briana01@gmail.com",
    registrationData: "5/30/14",
    accountStatus: "active",
  },
  {
    id: "02",
    profileImage: (
      <div>
        <Image src={userProfileImage} />
      </div>
    ),
    name: "Briana Lawrance",
    email: "briana01@gmail.com",
    registrationData: "5/30/14",
    accountStatus: "active",
  },
  {
    id: "03",
    profileImage: (
      <div>
        <Image src={userProfileImage} />
      </div>
    ),
    name: "Briana Lawrance",
    email: "briana01@gmail.com",
    registrationData: "5/30/14",
    accountStatus: "in-active",
  },
  {
    id: "04",
    profileImage: (
      <div>
        <Image src={userProfileImage} />
      </div>
    ),
    name: "Briana Lawrance",
    email: "briana01@gmail.com",
    registrationData: "5/30/14",
    accountStatus: "active",
  },
  {
    id: "05",
    profileImage: (
      <div>
        <Image src={userProfileImage} />
      </div>
    ),
    name: "Briana Lawrance",
    email: "briana01@gmail.com",
    registrationData: "5/30/14",
    accountStatus: "active",
  },
  {
    id: "06",
    profileImage: (
      <div>
        <Image src={userProfileImage} />
      </div>
    ),
    name: "Briana Lawrance",
    email: "briana01@gmail.com",
    registrationData: "5/30/14",
    accountStatus: "active",
  },
  {
    id: "07",
    profileImage: (
      <div>
        <Image src={userProfileImage} />
      </div>
    ),
    name: "Briana Lawrance",
    email: "briana01@gmail.com",
    registrationData: "5/30/14",
    accountStatus: "active",
  },
  {
    id: "08",
    profileImage: (
      <div>
        <Image src={userProfileImage} alt="user profile" />
      </div>
    ),
    name: "Briana Lawrance",
    email: "briana01@gmail.com",
    registrationData: "5/30/14",
    accountStatus: "active",
  },
  {
    id: "09",
    profileImage: (
      <div>
        <Image src={userProfileImage} alt="user profile" />
      </div>
    ),
    name: "Briana Lawrance",
    email: "briana01@gmail.com",
    registrationData: "5/30/14",
    accountStatus: "active",
  },
];

const filterData = [
  { label: "Active", value: "active" },
  { label: "Banned", value: "banned" },
];

export default function Page() {
  return (
    <>
      <DashboardHeader title="User Profile" />
      <DashboardMainContainer>
        <div className="flex ">
          <div className="flex">
            <SearchInput size="small" />
            <SelectInputShad
              placeholder="Select filter option"
              data={filterData}
            />
          </div>
          <div className="ml-auto">
            <SelectInputShad
              placeholder="1"
              data={[
                { label: "1", value: 1 },
                { label: "2", value: 2 },
              ]}
            />
          </div>
        </div>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-blueDark text-white hover:bg-blueDark">
                <TableHead className="text-white py-4 px-6">Id</TableHead>
                <TableHead className="text-white py-4 px-6">
                  Profile Image
                </TableHead>
                <TableHead className="text-white py-4 px-6">Name</TableHead>
                <TableHead className="text-white py-4 px-6">Email</TableHead>
                <TableHead className="text-white py-4 px-6">
                  Registration date
                </TableHead>
                <TableHead className="text-white py-4 px-6">
                  Account status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {userData.map((data) => (
                <TableRow key={data.id}>
                  <TableCell className="py-4 px-6">{data.id}</TableCell>
                  <TableCell className="py-4 px-6">
                    {data.profileImage}
                  </TableCell>
                  <TableCell className="py-4 px-6">{data.name}</TableCell>
                  <TableCell className="py-4 px-6">{data.email}</TableCell>
                  <TableCell className="py-4 px-6">
                    {data.registrationData}
                  </TableCell>
                  <TableCell className="py-4 px-6 ">
                    {data.accountStatus === "active" ? (
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
