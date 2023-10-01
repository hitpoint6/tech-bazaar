import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";

async function getData(productId: string) {
  const res = await fetch(
    `${process.env.HOST_DOMAIN}/api/products/${productId}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = await getData(params.productId);

  return (
    <div>
      <Header title="Product Detail" />
      <ProductCard product={product} />
    </div>
  );
}
