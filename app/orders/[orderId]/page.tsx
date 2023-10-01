import OrderCard from "@/components/OrderCard";
import Header from "@/components/Header";

async function getData(orderId: string) {
  const res = await fetch(`${process.env.HOST_DOMAIN}/api/orders/${orderId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function OrderPage({
  params,
}: {
  params: { orderId: string };
}) {
  const order = await getData(params.orderId);

  return (
    <div>
      <Header title="Order Detail" />
      <OrderCard order={order} />
    </div>
  );
}
