import React from "react";
import { Button } from "antd";

const AddItemButton = ({ setItemVisible }) => {
  return (
    <Button
      type="primary"
      onClick={() => setItemVisible(true)}
      style={{ float: "right", marginBottom: "1em" }}
    >
      Ma'lumot qo'shish
    </Button>
  );
};

export default AddItemButton;
