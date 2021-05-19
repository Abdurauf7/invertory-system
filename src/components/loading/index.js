import React from "react";
import { Spin } from "antd";
const Loading = () => {
  return (
    <div style={{ textAlign: "center", margin: "15% auto" }}>
      <Spin size="large" />
    </div>
  );
};

export default Loading;
