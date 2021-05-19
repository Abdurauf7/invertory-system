// React
import React from "react";

// Third part
import { Layout, Row, Col, Form, Input, Button, Typography } from "antd";

// Assets
import background from "../../assets/image/background.jpg";
import { openNotification } from "../../common/notification";

const LoginPage = ({ history }) => {
  const layout = {
    wrapperCol: {
      span: 22,
    },
  };
  const tailLayout = {
    wrapperCol: {
      span: 22,
    },
  };

  const onFinish = (value) => {
    // if (value.username === "Admin" && value.password === "admin54321") {
    //   let newData = {
    //     username: value.username,
    //     password: value.password,
    //   };
    // localStorage.setItem("token", JSON.stringify(newData));
    return history.push("/app");
    // } else {
    //   openNotification("error", "Login yoki Parol hato kiritilgan");
    // }
  };
  return (
    <Layout style={{ overflow: "hidden" }}>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12}>
          <div style={{ height: "100vh" }}>
            <img src={background} alt="" style={{ width: "100%" }}></img>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <div className="d-flex flex-column justify-content-center align-items-center bg-light  h-100 ">
            <div className="pb-4">
              <Typography
                style={{ fontSize: 32, margin: "0 1em 0 1em" }}
                className="text-dark font-weight-bold"
              >
                Welcome to Inventory <br /> Management system
              </Typography>
            </div>
            <Form
              style={{ width: 400 }}
              {...layout}
              name="basic"
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input placeholder="Foydalanuvchi" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password placeholder="Parol" />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button block type="primary" htmlType="submit">
                  Tizimga Kirish
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

export default LoginPage;
