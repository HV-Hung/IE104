import { Breadcrumb } from "antd";
import React from "react";
import { Layout } from "../../Layout/Layout";

export const Cinema = () => {
  return (
    <Layout>
      <Breadcrumb style={{ marginLeft: "16px" }}>
        <Breadcrumb.Item>Cinema</Breadcrumb.Item>
      </Breadcrumb>
      <div className=" flex items-center w-full p-0">
        <div className="p-[24px] h-[428px] w-[987px] bg-[#31d0fc] m-[24px]">
          Cinema
        </div>
      </div>
    </Layout>
  );
};
