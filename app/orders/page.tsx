import Orders from "@/components/Orders";
import Header from "@/components/Header";
import { connectToDB } from "@/utils/database";
import { Order } from "@/models/Order";
import PageNavigation from "@/components/PageNavigation";

async function getOrders(page: number, limit: number) {
  await connectToDB();
  const skip = (page - 1) * limit;

  const data = await Order.find({}).skip(skip).limit(limit);

  const orders = data.map((doc) => {
    const order = doc.toObject();
    order._id = order._id.toString();
    return order;
  });

  return orders;
}

async function getTotalOrderPages(limit: number) {
  await connectToDB();
  const total = await Order.countDocuments();
  const totalPages = Math.ceil(total / limit);
  return totalPages;
}

export default async function OrdersPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const url = "/orders";
  const page =
    typeof searchParams.page === "string" ? parseInt(searchParams.page) : 1;
  const limit =
    typeof searchParams.limit === "string" ? parseInt(searchParams.limit) : 2;

  const orders = await getOrders(page, limit);
  const totalPages = await getTotalOrderPages(limit);

  return (
    <section className="container mx-auto">
      <Header title="Orders" />
      <Orders orders={orders} />
      <PageNavigation
        url={url}
        page={page}
        limit={limit}
        totalPages={totalPages}
      />
    </section>
  );
}

