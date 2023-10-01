import Orders from "@/components/Orders";
import Header from "@/components/Header";
import PageNavigation from "@/components/PageNavigation";

async function getData(page: number, limit: number) {
  const res = await fetch(
    `${process.env.HOST_DOMAIN}/api/orders?page=${page}&limit=${limit}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
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

  const { orders, totalPages } = await getData(page, limit);

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

