"use client";
import { useState, useEffect } from "react";
import { OrderStatus } from "@/types/types";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

function UpdateOrderForm() {
  const router = useRouter();
  const { orderId } = useParams();
  const [order, setOrder] = useState({
    orderId: orderId,
    productId: "",
    quantity: 0,
    shippingCompany: "",
    trackingNumber: "",
    status: "Pending" as OrderStatus,
  });

  const [submitting, setIsSubmitting] = useState(false);

  async function getOrderAndProduct() {
    const orderRes = await fetch(`/api/orders/${orderId}`);
    const orderData = await orderRes.json();

    const newData = {
      orderId: orderId,
      productId: orderData.productId,
      quantity: orderData.quantity,
      shippingCompany: orderData.shippingCompany || "",
      trackingNumber: orderData.trackingNumber || "",
      status: orderData.status || "",
    };
    setOrder(newData);
  }

  useEffect(() => {
    getOrderAndProduct();
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setOrder((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await fetch(`/api/orders/update`, {
        method: "PATCH",
        body: JSON.stringify(order),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        router.push("/orders");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-2xl">
      <label className="block mb-2">
        Order ID:
        <input
          type="text"
          name="orderId"
          value={order.productId}
          className="border p-1 w-full"
          disabled
        />
      </label>
      <label className="block mb-2">
        Quantity:
        <input
          type="text"
          name="quantity"
          value={order.quantity}
          className="border p-1 w-full"
          disabled
        />
      </label>

      <label className="block mb-2">
        Shipping Company:
        <input
          type="text"
          name="shippingCompany"
          value={order.shippingCompany}
          onChange={handleChange}
          className="border p-1 w-full"
        />
      </label>
      <label className="block mb-2">
        Tracking Number:
        <input
          type="text"
          name="trackingNumber"
          value={order.trackingNumber}
          onChange={handleChange}
          className="border p-1 w-full"
        />
      </label>
      <label className="block mb-2">
        Status:
        <select
          value={order.status}
          name="status"
          onChange={handleChange}
          className="border p-1 w-full"
        >
          <option value="Pending">Pending</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </label>
      <button
        type="submit"
        disabled={submitting}
        className="block bg-reebelo-blue p-2 rounded-md mt-2"
      >
        {submitting ? "submitting...." : "Update Order"}
      </button>
    </form>
  );
}

export default UpdateOrderForm;
