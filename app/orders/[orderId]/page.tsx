"use client";

import OrderCard from "@/components/OrderCard";
import { OrderProps } from "@/types/types";
import { useState, useEffect } from "react";

function orderDetailPage({ params }: { params: { orderId: string } }) {
  const orderId = params.orderId;
  const [order, setOrder] = useState<OrderProps>({
    _id: "",
    productId: "",
    productName: "placerholder.png",
    productImage: "",
    price: 0,
    quantity: 0,
    shippingCompany: "",
    trackingNumber: "",
    status: "Pending",
  });

  async function getOrder() {
    const res = await fetch(`/api/orders/${orderId}`);
    const data = await res.json();

    setOrder({ ...order, ...data });
  }

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <div>
      <h1>Order Detail</h1>
      <OrderCard order={order} />
    </div>
  );
}

export default orderDetailPage;
