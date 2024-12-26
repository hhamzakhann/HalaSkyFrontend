"use client";
import { Table } from "antd";

import { createStyles } from "antd-style";

const useStyle = createStyles(({ css, token }) => {
  const { antCls } = token;
  return {
    customTable: css`
      ${antCls}-table {
        ${antCls}-table-container {
          ${antCls}-table-body,
          ${antCls}-table-content {
            scrollbar-width: thin;
            scrollbar-color: #eaeaea transparent;
            scrollbar-gutter: stable;
          }
        }
      }
    `,
  };
});

export default function TableCustom({ columns, dataSource }) {
  const { styles } = useStyle();
  return (
    <Table
      className={styles.customTable}
      columns={columns}
      dataSource={dataSource}
      pagination={{
        pageSize: 50,
        position: ["topRight"],
      }}
      scroll={{
        y: 90 * 5,
      }}
    />
  );
}
