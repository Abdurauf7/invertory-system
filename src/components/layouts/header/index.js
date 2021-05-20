import React from "react";
import { Avatar, Layout, Menu, Dropdown } from "antd";
import { withRouter } from "react-router-dom";
import {
  SettingOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";

const CustomHeader = ({ location, match }) => {
  const menu = (
    <Menu
      style={{
        width: 150,

        textAlign: "center",
      }}
    >
      <Menu.Item icon={<SettingOutlined />}>Settings</Menu.Item>
      <Menu.Divider />
      <Menu.Item icon={<LogoutOutlined />}>Logout</Menu.Item>
    </Menu>
  );

  return (
    <Layout.Header style={{ background: "rgb(247,247,247)", height: 70 }}>
      <div className="d-flex justify-content-end m-2" style={{ width: "98%" }}>
        <Dropdown overlay={menu} placement="topCenter" arrow>
          <Avatar size={52} icon={<UserOutlined />} shape="square" />
        </Dropdown>
      </div>
    </Layout.Header>
  );
};

export default withRouter(CustomHeader);
