"use client";

import ProductCard from "@/components/ProductCard";
import Modal from "@/components/Modal";
import { ProductProps } from "@/types/types";
import { useState, useEffect } from "react";

function Products() {
  // const products = [
  //   {
  //     id: 1,
  //     name: "MacBook Pro 2023 14",
  //     description: "This is MacBook Pro 2023 14",
  //     price: "$1789.00",
  //     image:
  //       "https://reebelo.com/_next/image?url=https%3A%2F%2Fcdn.reebelo.com%2Fpim%2Fproducts%2FP-APPLEMACBOOKPRO202314INCH%2FSIL-image-0.jpg&w=640&q=75",
  //     quantity: 15,
  //   },
  //   {
  //     id: 2,
  //     name: "Galaxy A14 - AT&T",
  //     description: "Galaxy A14 - AT&T",
  //     price: "$95.0",
  //     image:
  //       "https://reebelo.com/_next/image?url=https%3A%2F%2Fcdn.reebelo.com%2Fpim%2Fproducts%2FP-SAMSUNGGALAXYA14%2FBLA-image-0.jpg&w=640&q=75",
  //     quantity: 20,
  //   },
  //   {
  //     id: 3,
  //     name: "iPad 10th Gen (2022) 10.9",
  //     description: "This is iPad 10th Gen (2022) 10.9",
  //     price: "$399.00",
  //     image:
  //       "https://reebelo.com/_next/image?url=https%3A%2F%2Fcdn.reebelo.com%2Fpim%2Fproducts%2FP-IPAD10THGEN2022%2FPIN-image-0.jpg&w=640&q=75",
  //     quantity: 25,
  //   },
  //   {
  //     id: 4,
  //     name: "Apple Watch Series 3",
  //     description: "This is Apple Watch Series 3",
  //     price: "$67.00",
  //     image:
  //       "https://reebelo.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0604%2F9153%2F0423%2Ffiles%2FSIL-image-0_517fcdc1-c456-42b9-98e4-df2fc4119fd8.jpg%3Fv%3D1689919767&w=640&q=75",
  //     quantity: 10,
  //   },
  // ];

  const [allProducts, setAllProducts] = useState<ProductProps[]>([]);
  async function getProducts() {
    const response = await fetch("/api/products");
    const data = await response.json();

    setAllProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const [selectedProduct, setSelectedProduct] = useState<ProductProps | null>(
    null
  );

  const handleCardClick = (product: ProductProps) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {allProducts.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onCardClick={handleCardClick}
          />
        ))}
        <Modal product={selectedProduct} onClose={handleCloseModal} />
      </section>
    </>
  );
}

export default Products;
