import { OrderProps } from "@/types/types";
import { useRouter } from "next/navigation";
import OrderProductCard from "./OrderProductCard";
import Link from "next/link";

type OrderCardProps = {
  order: OrderProps;
};

function OrderCard({ order }: OrderCardProps) {
  const router = useRouter();

  function handleUpdateClick() {
    router.push(`/orders/${order._id}/update`);
  }

  return (
    <div className="flex flex-col md:flex-row border p-4 mb-4 rounded-md">
      <div className="flex-none md:w-1/3 mb-4 md:mb-0 md:mr-4">
        <OrderProductCard
          productImage={order.productImage}
          productId={order.productId}
          productName={order.productName}
          quantity={order.quantity}
          price={order.price}
        />
      </div>
      <div className="flex-1">
        <p>Order ID: {order._id}</p>
        <p>Created at: {order.createdAt}</p>
        <p>Updated at: {order.updatedAt}</p>
        <p>Shipping Company: {order.shippingCompany}</p>
        <p>Tracking Number: {order.trackingNumber}</p>
        <p>Status: {order.status}</p>
        <div className="flex space-x-4">
          <button
            onClick={handleUpdateClick}
            className="block bg-reebelo-blue p-2 rounded-md mt-2"
          >
            Update
          </button>
          <Link href={`/orders/${order._id}`} className="custom_button_outline">
            <p>Order Details</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
