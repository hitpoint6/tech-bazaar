"use client";

import UpdateOrderForm from "@/components/UpdateOrderForm";
import Header from "@/components/Header";

function orderUpdatePage({ params }: { params: { orderId: string } }) {
  const orderId = params.orderId;

  return (
    <div>
      <Header title="Order Update Page" />
      <UpdateOrderForm orderId={orderId} />
    </div>
  );
}

export default orderUpdatePage;
