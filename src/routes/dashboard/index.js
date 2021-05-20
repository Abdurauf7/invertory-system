import React, { useState } from "react";
import Products from "./moleculas/Products";
import LineChart from "./atom/LineChart";
import PieChart from "./atom/PieChart";
import CustomTable from "../../common/itemTable";

const Dashboard = () => {
  const [data, setData] = useState();

  const columns = [];
  return (
    <div className="container">
      <Products title={"Good's Category"}>
        <PieChart />
      </Products>
      <Products title={"Selling Goods"}>
        <LineChart />
      </Products>
      <div className="pb-5">
        <Products title={"Sales information "}>
          <CustomTable data={data} loading={false} columns={columns} />
        </Products>
      </div>
    </div>
  );
};

export default Dashboard;
