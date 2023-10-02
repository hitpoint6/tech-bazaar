"use client";

import ProductForm from "@/components/ProductForm";
import Header from "@/components/Header";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ProductProps } from "@/types/types";

function UpdateProductPage({ params }: { params: { productId: string } }) {
  const router = useRouter();
  const productId = params.productId;
  const [product, setProduct] = useState<ProductProps>({
    _id: "",
    name: "",
    description: "",
    price: 0,
    image: "",
    quantity: 0,
  });
  const [submitting, setIsSubmitting] = useState(false);

  async function getProduct() {
    const res = await fetch(`/api/products/${productId}`);
    const data = await res.json();

    setProduct(data);
  }

  useEffect(() => {
    getProduct();
  }, []);

  if (!product) {
    return null;
  }

  async function handleUpdate(updatedProduct: ProductProps) {
    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: "PATCH",
        body: JSON.stringify(updatedProduct),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const productData = await response.json();
        router.push(`/products/${productData._id}`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="container mx-auto">
      <Header title="Update Product" />
      <ProductForm
        type="Update"
        initialData={product}
        onSubmit={handleUpdate}
        isSubmitting={submitting}
      />
    </section>
  );
}

export default UpdateProductPage;
