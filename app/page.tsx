import Header from "@/components/Header";
import Products from "@/components/Products";
import PageNavigation from "@/components/PageNavigation";

async function getData(page: number, limit: number) {
  const res = await fetch(
    `${process.env.HOST_DOMAIN}/api/products?page=${page}&limit=${limit}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const url = "/";
  const page =
    typeof searchParams.page === "string" ? parseInt(searchParams.page) : 1;
  const limit =
    typeof searchParams.limit === "string" ? parseInt(searchParams.limit) : 2;

  const { products, totalPages } = await getData(page, limit);

  return (
    <section className="container mx-auto">
      <Header title="Products" />
      <Products products={products} />
      <PageNavigation
        url={url}
        page={page}
        limit={limit}
        totalPages={totalPages}
      />
    </section>
  );
}
