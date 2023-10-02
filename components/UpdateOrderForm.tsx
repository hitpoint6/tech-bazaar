"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import OrderProductCard from "./OrderProductCard";
import { OrderProps } from "@/types/types";

function UpdateOrderForm({ orderId }: { orderId: string }) {
  const router = useRouter();
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

  const [submitting, setIsSubmitting] = useState(false);

  async function getOrderAndProduct() {
    const orderRes = await fetch(`/api/orders/${orderId}`);
    const orderData = await orderRes.json();

    setOrder({ ...order, ...orderData });
  }

  useEffect(() => {
    getOrderAndProduct();
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await fetch(`/api/orders/${orderId}`, {
        method: "PATCH",
        body: JSON.stringify(order),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const orderData = await response.json();
        router.push(`/orders/${orderData._id}`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleClose() {
    router.push("/orders");
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-2xl">
      <p>Order Id: {order._id}</p>
      <OrderProductCard
        productImage={order.productImage}
        productId={order.productId}
        productName={order.productName}
        quantity={order.quantity}
        price={order.price}
      />
      <label className="input_label">
        Shipping Company:
        <input
          type="text"
          name="shippingCompany"
          value={order.shippingCompany}
          onChange={handleChange}
          className="input_field"
        />
      </label>
      <label className="input_label">
        Tracking Number:
        <input
          type="text"
          name="trackingNumber"
          value={order.trackingNumber}
          onChange={handleChange}
          className="input_field"
        />
      </label>
      <label className="input_label">
        Status:
        <select
          value={order.status}
          name="status"
          onChange={handleChange}
          className="input_field"
        >
          <option value="Pending">Pending</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </label>
      <div className="flex space-x-4">
        <button type="submit" disabled={submitting} className="custom_button">
          {submitting ? "submitting...." : "Update Order"}
        </button>
        <button onClick={handleClose} className="block mt-2">
          Close
        </button>
      </div>
    </form>
  );
}

export default UpdateOrderForm;
