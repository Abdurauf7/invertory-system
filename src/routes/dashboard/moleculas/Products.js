import React from "react";

const Products = ({ children, title }) => {
  return (
    <div className="mt-4 border border-light shadow bg-light rounded p-2">
      <div>
        <h1 style={{ marginLeft: "0.5em" }}>{title}</h1>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Products;
