"use client";

import ProductCard from "@/components/ProductCard";
import { ProductProps } from "@/types/types";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Link from "next/link";

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
      <Header title={`Product Detail ${product.name}`} />
      <ProductCard product={product} />
      <Link href={`/`} className="mt-4 shift_up_card">
        Back to Products
      </Link>
    </div>
  );
}

export default productDetailPage;
