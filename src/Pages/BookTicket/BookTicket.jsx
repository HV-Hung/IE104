import { Breadcrumb } from "antd";
import React from "react";
import { Layout } from "../../Layout/Layout";

import { Seat } from "./Seat";



export const BookTicket = () => {
  return (
    <Layout>
      <Breadcrumb style={{ marginLeft: "16px" }}>
        <Breadcrumb.Item>BookTicket</Breadcrumb.Item>
      </Breadcrumb>
      <div className="p-[24px] min-h-[360px] bg-white m-[24px]">
        <Seat state={0} className=" mb-[20px]"></Seat>
        <Seat state={2}></Seat>
      </div>
    </Layout>
  );
};
