"use client";
import { OrderProps } from "@/types/types";
import OrderCard from "./OrderCard";
import { useState, useEffect } from "react";


function Orders() {
  const [allOrders, setAllOrders] = useState<OrderProps[]>([]);

  async function getOrders() {
    const response = await fetch("/api/orders");
    const data = await response.json();
    setAllOrders(data);
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="p-4">
      {allOrders.map((order) => (
        <OrderCard key={order._id} order={order} />
      ))}
    </div>
  );
}

export default Orders;
