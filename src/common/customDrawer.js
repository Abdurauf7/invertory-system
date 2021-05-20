import React from "react";
import { Drawer, Button } from "antd";

const AddItemDrawer = ({
  visible,
  form,
  title,
  onClose,
  onSubmit,
  children,
}) => {
  return (
    <Drawer
      width={350}
      title={title}
      visible={visible}
      destroyOnClose={true}
      onClose={onClose}
      footer={
        <div
          style={{
            textAlign: "right",
          }}
        >
          <Button
            danger
            onClick={() => {
              form.resetFields();
              onClose();
            }}
            style={{ marginRight: 8 }}
          >
            Cancel
          </Button>
          <Button
            htmlType="submit"
            onClick={() => {
              form
                .validateFields()
                .then((values) => {
                  onSubmit(values);
                  form.resetFields();
                })
                .catch((info) => {
                  // console.log("Validate Failed:", info);
                });
            }}
            type="primary"
          >
            Add
          </Button>
        </div>
      }
    >
      {children}
    </Drawer>
  );
};

export default AddItemDrawer;
