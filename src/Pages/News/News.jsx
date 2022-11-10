import { Breadcrumb } from "antd";
import React from "react";
import { Layout } from "../../Layout/Layout";

export const News = () => {
  return (
    <Layout>
      <Breadcrumb style={{ marginLeft: "16px" }}>
        <Breadcrumb.Item>New</Breadcrumb.Item>
      </Breadcrumb>
      <div className="p-[24px] min-h-[360px] bg-white m-[24px]">New</div>
    </Layout>
  );
};
