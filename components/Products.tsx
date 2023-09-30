"use client";

import ProductCard from "@/components/ProductCard";
import Modal from "@/components/Modal";
import { ProductProps } from "@/types/types";
import { useState, useEffect } from "react";

function Products() {
  const [allProducts, setAllProducts] = useState<ProductProps[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(10);

  async function getProducts() {
    const response = await fetch(`/api/products?page=${page}&limit=2`);
    const data = await response.json();

    setTotalPages(data.totalPages);
    setAllProducts((prevProducts) => [...prevProducts, ...data.products]);
  }

  useEffect(() => {
    getProducts();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight
    ) {
      setTimeout(function () {
        if (page < totalPages) {
          setPage((prevPage) => prevPage + 1);
        }
      }, 1000);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
