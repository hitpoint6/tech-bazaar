"use client";

import ProductForm from "@/components/ProductForm";
import Header from "@/components/Header";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ProductProps } from "@/types/types";

function NewProductPage() {
  const router = useRouter();
  const initialProduct = {
    _id: "",
    name: "",
    description: "",
    price: 1,
    image: "",
    quantity: 1,
  };

  const [submitting, setIsSubmitting] = useState(false);

  async function handleAdd(product: ProductProps) {
    try {
      const response = await fetch(`/api/products/new`, {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="container mx-auto">
      <Header title="New Product" />
      <ProductForm
        type="Add"
        initialData={initialProduct}
        onSubmit={handleAdd}
        isSubmitting={submitting}
      />
    </section>
  );
}

export default NewProductPage;
