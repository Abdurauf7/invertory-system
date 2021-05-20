import React from "react";
import { Table } from "antd";

const CustomTable = ({ data, loading, columns }) => {
  return (
    <Table
      rowKey={(data) => data.id}
      bordered
      loading={loading}
      dataSource={data}
      columns={columns}
    />
  );
};

export default CustomTable;
