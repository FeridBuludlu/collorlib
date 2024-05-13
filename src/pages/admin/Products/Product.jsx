import React, { useContext } from "react";
import Table from "../../../components/admin/Table/Table";
import MainContext from "../../../context/context";

const Product = () => {
  const { data } = useContext(MainContext);
  return <div>{<Table items={data} />}</div>;
};

export default Product;
