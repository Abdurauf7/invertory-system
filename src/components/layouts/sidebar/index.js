import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  RiseOutlined,
  AppstoreOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import brand from "../../../assets/image/logo.png";
const CustomSider = ({ history, match, location }) => {
  //   let path = location.pathname.split("/");

  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <Layout.Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      width={250}
      theme="dark"
      style={{ minHeight: "100vh" }}
    >
      {!collapsed ? (
        <div className="mt-4 " style={{ marginLeft: "1.5em" }}>
          <h3 className="text-light" style={{ fontSize: 20 }}>
            Inventory <br />
            Management System
          </h3>
        </div>
      ) : (
        <div style={{ width: 50, marginLeft: "1.1em", marginTop: "1em" }}>
          <img src={brand} alt="brand" style={{ width: "100%" }} />
        </div>
      )}

      <Menu
        style={{ marginTop: "2em" }}
        onClick={(value) => history.push(value.key)}
        theme="dark"
        defaultSelectedKeys={["/app/dashboard"]}
        mode="inline"
      >
        <Menu.Item key="/app/dashboard" icon={<RiseOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="/app/products" icon={<AppstoreOutlined />}>
          Selling Goods
        </Menu.Item>

        <Menu.Item key="/app/goodsInfo" icon={<CalendarOutlined />}>
          Information of Goods
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};

export default withRouter(CustomSider);
