"use client";
import TableCustom from "@/app/_components/formControls/TableCustom";
import { Tag } from "antd";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    width: "10%",
  },
  {
    title: "Name",
    dataIndex: "name",
    width: "30%",
  },
  {
    title: "Email",
    dataIndex: "email",
    width: "20%",
  },
  {
    title: "Registration date",
    dataIndex: "resignDate",
    width: "20%",
  },
  {
    title: "Account status",
    dataIndex: "status",
    width: "20%",
    render: (tags) => (
      <span>
        {tags.map((tag) => {
          let color;
          if (tag === "active") {
            color = "green";
          }
          if (tag === "banned") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
];
const dataSource = Array.from({
  length: 100,
}).map((_, i) => ({
  key: i,
  id: `${i}`.padStart(2),
  name: `Edward King ${i}`,
  email: "xyz@gmail.com",
  status: ["active"],
  resignDate: `${new Date().toLocaleDateString()}`,
}));

export default function UserTable() {
  return <TableCustom columns={columns} dataSource={dataSource} />;
}
