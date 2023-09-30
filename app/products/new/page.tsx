import NewProductForm from "@/components/NewProductForm";
import Header from "@/components/Header";

function NewProductPage() {
  return (
    <section className="container mx-auto">
      <Header title="New Product" />
      <NewProductForm />
    </section>
  );
}

export default NewProductPage;
