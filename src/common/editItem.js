import React from "react";
import { Modal } from "antd";

const EditModal = ({ visible, children, title, onCancel }) => {
  return (
    <Modal
      title={`${title}`}
      visible={visible}
      onCancel={() => onCancel()}
      footer={false}
      destroyOnClose={true}
      closable={false}
    >
      {children}
    </Modal>
  );
};

export default EditModal;
