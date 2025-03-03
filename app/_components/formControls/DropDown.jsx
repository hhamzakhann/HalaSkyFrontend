"use client";
import { UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, message, Space } from "antd";
const handleMenuClick = (e) => {
  message.info("Click on menu item.");
};
const items = [
  {
    label: "1st menu item",
    key: "1",
    icon: <UserOutlined />,
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

export default function DropDown({ children }) {
  return (
    <Dropdown menu={menuProps}>
      <Button>
        <Space>{children}</Space>
      </Button>
    </Dropdown>
  );
}
