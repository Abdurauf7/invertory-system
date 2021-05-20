import React, { useState, useEffect } from "react";
import { Form } from "antd";
import CustomTable from "../../common/itemTable";
import CustomDrawer from "../../common/customDrawer";
import CustomEditModal from "../../common/editItem";
import AddItemButton from "../../common/addItemButton";

import { openNotification } from "../../common/notification";

const Family = ({ match }) => {
  const [form] = Form.useForm();

  const [data, setData] = useState([]);
  const [editableData, setEditableData] = useState({});
  const [isDrawer, setDrawer] = useState(false);
  const [isModal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // getAllOilalar();
    // eslint-disable-next-line
  }, []);

  const columns = [];

  // const getAllOilalar = () => {
  //   getAllFamily(community, region, distirct, street).then((res) => {
  //     if (res.status === 200) {
  //       let i = 0;
  //       const newData = res.data.map((d) => ({ ...d, number: ++i }));

  //       setData(newData);
  //       setLoading(false);
  //     }
  //   });
  // };

  // const handleSubmit = async (value) => {
  //   openNotification("success", "Oila qo'shildi");
  //   setDrawer(false);
  // };

  // const onEdit = (value) => {
  //   setEditableData(value);
  //   setModal(true);
  // };

  // const handeEditFamily = async (value) => {
  //   openNotification("success", "Oila o'zgartirildi");
  //   setModal(false);
  // };

  // const handleDelete = async (value) => {
  //   openNotification("success", "Oila o'chirildi");
  // };

  return (
    <div style={{ width: "98%", margin: "1em auto" }}>
      <AddItemButton />
      <CustomTable
        data={data}
        // loading={loading}
        columns={columns}
      />

      <CustomDrawer
        title="Oila Qo'shish"
        form={form}
        visible={isDrawer}
        onClose={() => setDrawer(false)}
        // onSubmit={handleSubmit}
      >
        {/* <AddFamilyForm form={form} /> */}
      </CustomDrawer>

      <CustomEditModal
        title={`${editableData.family}`}
        visible={isModal}
        onCancel={() => setModal(false)}
      ></CustomEditModal>
    </div>
  );
};

export default Family;
