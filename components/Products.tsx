"use client";

import ProductCard from "@/components/ProductCard";
import { ProductProps } from "@/types/types";
import { useState, useEffect } from "react";

function Products() {
  const [allProducts, setAllProducts] = useState<ProductProps[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(10);

  async function getProducts() {
    const response = await fetch(`/api/products?page=${page}&limit=10`);
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
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {allProducts &&
          allProducts.map((product) => (
            <ProductCard
              key={product?._id}
              product={product}
              // onCardClick={handleCardClick}
              // onClose={handleCloseModal}
            />
          ))}
      </section>
    </>
  );
}

export default Products;
