"use client";

import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { UserOutlined, TeamOutlined } from "@ant-design/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { spartanFont } from "../font";
import Image from "next/image";

import DashboardIcon from "@/public/dashboard-icon.svg";
import EditIcon from "@/public/edit-icon.svg";
import promotionIcon from "@/public/promotion-icon.svg";
import chatIcon from "@/public/chat-icon.svg";
import guardIcon from "@/public/guard-icon.svg";
import settingIcon from "@/public/setting-icon.svg";
import helpIcon from "@/public/help-icon.svg";

const { Sider } = Layout;

function MenuSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      onCollapse={(value) => setCollapsed(value)}
      className="!w-full !min-w-full !max-w-full !max-h-full !bg-transparent !grow flex flex-col"
    >
      <Menu
        className={`!max-h-full !bg-transparent !border-0 !text-lg overflow-auto`}
        defaultSelectedKeys={["1"]}
        mode="inline"
        selectedKeys={[pathname]}
        items={[
          {
            key: "/dashboard",
            className: `${spartanFont.className}`,
            icon: <Image src={DashboardIcon} alt="dashboard icon" />,
            label: <Link href="/dashboard">Dashboard</Link>,
          },
          {
            key: "user",
            className: `${spartanFont.className}`,
            icon: <UserOutlined />,
            label: "User`s",
            children: [
              {
                key: "/dashboard/user/profile",
                label: <Link href="/dashboard/user/profile">User Profile</Link>,
              },
              {
                key: "/dashboard/user/ban-unban",
                label: (
                  <Link href="/dashboard/user/ban-unban">User Ban / Unban</Link>
                ),
              },
              {
                key: "/dashboard/user/account-access",
                label: (
                  <Link href="/dashboard/user/account-access">
                    User Account Access
                  </Link>
                ),
              },
              {
                key: "/dashboard/user/role",
                label: <Link href="/dashboard/user/role">Role Assignment</Link>,
              },
            ],
          },
          {
            key: "content-management",
            icon: <Image src={EditIcon} alt="edit icon" />,
            label: "Content",
            className: `${spartanFont.className}`,
            children: [
              {
                key: "/dashboard/content-management",
                label: (
                  <Link href="/dashboard/content-management">
                    Content Management
                  </Link>
                ),
              },
              {
                key: "/dashboard/post-comment-moderations",
                label: (
                  <Link href="/dashboard/post-comment-moderations">
                    Post & Comment Moderation
                  </Link>
                ),
              },
              {
                key: "/dashboard/community-guideline-tools",
                label: (
                  <Link href="/dashboard/community-guideline-tools">
                    Community Guidelines Enforcement Tools
                  </Link>
                ),
              },
            ],
          },
          {
            key: "/dashboard/promotion-discount-management",
            className: `${spartanFont.className}`,
            icon: <Image src={promotionIcon} alt="promotion icon" />,
            label: (
              <Link href="/dashboard/promotion-discount-management">
                Promotion & Discount Management
              </Link>
            ),
          },
          {
            key: "help desk",
            className: `${spartanFont.className}`,
            icon: <Image src={chatIcon} alt="chat icon" />,
            label: "Customer Support",
            children: [
              {
                key: "/dashboard/customer-support",
                label: (
                  <Link href="/dashboard/customer-support">
                    Customer Support & Help Desk
                  </Link>
                ),
              },
              {
                key: "live-chat",
                label: <Link href="#">Live Chat Assistance</Link>,
              },
              {
                key: "/dashboard/faq-management",
                label: (
                  <Link href="/dashboard/faq-management">
                    Automated FAQ Management
                  </Link>
                ),
              },
              {
                key: "feedback",
                label: <Link href="#">Collecting Feedback</Link>,
              },
            ],
          },
          {
            key: "privacy",
            className: `${spartanFont.className}`,
            icon: <Image src={guardIcon} alt="privacy icon" />,
            label: "Security & Privacy Management",
            children: [
              {
                key: "role-managment",
                label: <Link href="#">Role Management</Link>,
              },
              {
                key: "audit-logs",
                label: <Link href="#">Audit Logs</Link>,
              },
              {
                key: "2-factor-auth",
                label: <Link href="#">Two-Factor Authentication (2FA)</Link>,
              },
              {
                key: "data-privacy",
                label: <Link href="#">Data Privacy Compliance</Link>,
              },
            ],
          },
          {
            key: "/setting",
            className: `${spartanFont.className}`,
            icon: <Image src={settingIcon} alt="setting icon" />,
            label: <Link href="/setting">Setting</Link>,
          },
          {
            key: "/help",
            className: `${spartanFont.className}`,
            icon: <Image src={helpIcon} alt="help icon" />,
            label: <Link href="/help">Help</Link>,
          },
        ]}
      />
    </Sider>
  );
}

export default MenuSidebar;
