"use client";

import UpdateOrderForm from "@/components/UpdateOrderForm";
import Header from "@/components/Header";

function orderUpdatePage() {
  return (
    <div>
      <Header title="Order Update Page" />
      <UpdateOrderForm />
    </div>
  );
}

export default orderUpdatePage;
