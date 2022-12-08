import { Breadcrumb } from "antd";
import React from "react";
import { Layout } from "../../Layout/Layout";
import { Ticket } from "./Ticket";

export const BookTicket = () => {
  return (
    <Layout>
      <Breadcrumb style={{ marginLeft: "16px" }}>
        <Breadcrumb.Item>BookTicket</Breadcrumb.Item>
      </Breadcrumb>
      <div className="p-[24px] min-h-[360px] bg-white m-[24px]">
        <Ticket></Ticket>
      </div>
    </Layout>
  );
};
