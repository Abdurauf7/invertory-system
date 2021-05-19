import React from "react";
import { Layout, Menu } from "antd";
import {
  RiseOutlined,
  AppstoreOutlined,
  CalendarOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { withRouter } from "react-router-dom";

const CustomSider = ({ history, match, location }) => {
  //   let path = location.pathname.split("/");

  return (
    <Layout.Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {}}
      onCollapse={(collapsed, type) => {}}
      style={{ height: "100vh" }}
      width={200}
      theme="dark"
    >
      <div className="mt-4">
        <h3 className="text-center text-light">
          Inventory <br />
          Management System
        </h3>
      </div>

      <Menu
        onClick={(value) => history.push(value.key)}
        className="d-flex flex-column pt-5 justify-content-center"
        mode="vertical"
        theme="dark"
        // defaultSelectedKeys={`${match.url}/regions`}
      >
        <Menu.Item
          disabled
          key={`${match.url}/stat`}
          className="mt-4"
          style={{
            width: 150,
            marginLeft: "2em",
            borderRadius: 50,
          }}
          icon={<RiseOutlined style={{ fontSize: 21 }} />}
        >
          Dashboard
        </Menu.Item>
        <Menu.Item
          key={`${match.url}/sellGoods`}
          className="mt-4 "
          style={{
            width: 150,
            marginLeft: "2em",
            borderRadius: 50,
          }}
          icon={<AppstoreOutlined style={{ fontSize: 21 }} />}
        >
          <span>Selling goods</span>
        </Menu.Item>
        <Menu.Item
          key={`${match.url}/checkGoods`}
          className="mt-4 "
          style={{
            width: 150,
            marginLeft: "2em",
            borderRadius: 50,
          }}
          icon={<AppstoreOutlined style={{ fontSize: 21 }} />}
        >
          <span>Checking goods</span>
        </Menu.Item>

        <Menu.Item
          key="/login"
          className="mt-3 "
          style={{
            width: 150,
            marginLeft: "2em",
            borderRadius: 50,
          }}
          icon={<LogoutOutlined style={{ fontSize: 21 }} />}
        >
          Logout
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};

export default withRouter(CustomSider);
