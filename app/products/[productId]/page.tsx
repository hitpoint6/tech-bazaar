"use client";

import ProductCard from "@/components/ProductCard";
import { ProductProps } from "@/types/types";
import { useState, useEffect } from "react";
import Header from "@/components/Header";

function productDetailPage({ params }: { params: { productId: string } }) {
  const productId = params.productId;
  const [product, setProduct] = useState<ProductProps>({
    _id: "",
    name: "",
    description: "",
    image: "placeholder.png",
    price: 0,
    quantity: 0,
  });

  async function getProduct() {
    const res = await fetch(`/api/products/${productId}`);
    const data = await res.json();

    setProduct({ ...product, ...data });
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <Header title="Products" />
      <ProductCard product={product} />
    </div>
  );
}

export default productDetailPage;
