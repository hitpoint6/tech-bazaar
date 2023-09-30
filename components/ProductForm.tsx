"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ProductProps } from "@/types/types";

type ProductFormProps = {
  type: string;
  initialData: ProductProps;
  onSubmit: (product: ProductProps) => void;
  isSubmitting: boolean;
};

function ProductForm({
  type,
  initialData,
  onSubmit,
  isSubmitting,
}: ProductFormProps) {
  const router = useRouter();
  const [product, setProduct] = useState<ProductProps>(initialData);

  useEffect(() => {
    setProduct(initialData);
  }, [initialData]);

  const [error, setError] = useState({ image: "" });
  function validateImageUrl(url: string) {
    const pattern = /^https:\/\//;
    return pattern.test(url);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });

    if (name === "image" && !validateImageUrl(value)) {
      setError({ ...error, image: "Image URL must start with https://" });
    } else {
      setError({ ...error, image: "" });
    }
  };

  function handleClose() {
    router.push("/");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(product);
    setError({ image: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-2xl">
      <label className="input_label">
        Name:
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          className="input_field"
        />
      </label>
      <label className="input_label">
        Description:
        <input
          type="text"
          name="description"
          value={product.description}
          onChange={handleChange}
          className="input_field"
        />
      </label>
      <label className="input_label">
        Price $:
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          className="input_field"
        />
      </label>
      <label className="input_label">
        Image URL:
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
          className="input_field"
        />
        {error.image && <p className="text-red-500 text-xs">{error.image}</p>}
      </label>
      <label className="input_label">
        Quantity:
        <input
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          className="input_field"
        />
      </label>
      <div className="flex space-x-4">
        <button type="submit" disabled={isSubmitting} className="custom_button">
          {isSubmitting ? "submitting...." : `${type} Product`}
        </button>
        <button onClick={handleClose} className="block mt-2">
          Close
        </button>
      </div>
    </form>
  );
}

export default ProductForm;
