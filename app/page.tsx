import Products from "@/components/Products";
import Header from "@/components/Header";

export default function Home() {
  return (
    <section className="container mx-auto">
      <Header title="Products" />
      <Products />
    </section>
  );
}
