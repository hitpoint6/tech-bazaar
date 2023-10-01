// import Products from "@/components/Products";
// import Header from "@/components/Header";

// export default function Home() {
//   return (
//     <section className="container mx-auto">
//       <Header title="Products" />
//       <Products />
//     </section>
//   );
// }

import Header from "@/components/Header";
import Products from "@/components/Products";
import { connectToDB } from "@/utils/database";
import { Product } from "@/models/Product";
import PageNavigation from "@/components/PageNavigation";

async function getProducts(page: number, limit: number) {
  await connectToDB();
  const skip = (page - 1) * limit;

  const data = await Product.find({}).skip(skip).limit(limit);

  const products = data.map((doc) => {
    const product = doc.toObject();
    product._id = product._id.toString();
    return product;
  });

  return products;
}

async function getTotalProductPages(limit: number) {
  await connectToDB();
  const total = await Product.countDocuments();
  const totalPages = Math.ceil(total / limit);
  return totalPages;
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

  const products = await getProducts(page, limit);
  const totalPages = await getTotalProductPages(limit);

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
