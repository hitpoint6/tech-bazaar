import { OrderProps } from "@/types/types";
import { useRouter } from "next/navigation";

type OrderCardProps = {
  order: OrderProps;
};

function OrderCard({ order }: OrderCardProps) {
  const router = useRouter();

  function handleUpdateClick() {
    router.push(`/orders/${order._id}/update`);
  }

  return (
    <div className="border p-4 mb-4 rounded-md">
      <p>Product ID: {order.productId}</p>
      <p>Order Quantity: {order.quantity}</p>
      <p>Shipping Company: {order.shippingCompany}</p>
      <p>Tracking Number: {order.trackingNumber}</p>
      <p>Status: {order.status}</p>
      <button
        onClick={handleUpdateClick}
        className="block bg-reebelo-blue p-2 rounded-md mt-2"
      >
        Update
      </button>
    </div>
  );
}

export default OrderCard;
