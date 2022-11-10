import { Breadcrumb } from "antd";
import React from "react";
import { Layout } from "../Layout/Layout";

export const Home = () => {
  return (
    <Layout>
      <Breadcrumb style={{ marginLeft: "16px" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      <div className="p-[24px] min-h-[360px] bg-white m-[24px]">Home</div>
    </Layout>
  );
};
