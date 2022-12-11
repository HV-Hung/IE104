import React from 'react'
import { useGet } from "../../api";

export const HistoryBooKing = () => {
    const { fetchGet, result: ticket } = useGet();
    
    const user = JSON.parse(localStorage.getItem("user"));
    React.useEffect(() => {
      fetchGet("ticket/user/" + user?._id);
    }, []);
    console.log(ticket);
  return (
    <div></div>
  )
}
