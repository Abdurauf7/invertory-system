import React from "react";
import { Layout } from "antd";
// import Header from "../Header/";
import Sider from "../sidebar/";
// import Content from "../Content/";
const App = () => {
  return (
    <>
      <Layout>
        <Sider />
        <Layout>
          {/* <Header />
          <Content /> */}
          {/* <Layout.Footer>Footer</Layout.Footer> */}
        </Layout>
      </Layout>
    </>
  );
};

export default App;
