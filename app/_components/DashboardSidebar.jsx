"use client";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import UserInfo from "../_features/users/UserInfo";
import Logo from "./Logo";
import MenuSidebar from "./MenuSidebar";

export default function DashboardSidebar() {
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <div className="py-10 px-8 h-h-full bg-[#F5F7F9] space-y-4 divide-y grid grid-rows-[auto_1fr_auto] absolute top-0 -left-full bottom-0 h-full z-20 lg:static">
      <Logo varient="primary" />
      <MenuSidebar />
      <div className="pt-4">
        <UserInfo />
      </div>
    </div>
  );
}
