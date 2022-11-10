import { Breadcrumb } from "antd";
import React from "react";
import { Layout } from "../../Layout/Layout";

export const CinemaDetail = () => {
  return (
    <Layout>
      <Breadcrumb style={{ marginLeft: "16px" }}>
        <Breadcrumb.Item>CinemaDetail</Breadcrumb.Item>
      </Breadcrumb>
      <div className="p-[24px] min-h-[360px] bg-white m-[24px]">
        CinemaDetail
      </div>
    </Layout>
  );
};
