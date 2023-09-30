"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function NewProductForm() {
  const router = useRouter();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 1,
    image: "",
    quantity: 1,
  });
  const [submitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState({ image: "" });
  const validateImageUrl = (url: string) => {
    const pattern = /^https:\/\//;
    return pattern.test(url);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!validateImageUrl(product.image)) {
      setError({
        image: 'Invalid image URL. Must start with "https://".',
      });
      return;
    }

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
    console.log(product);
    setError({ image: "" });
  }

  function handleClose() {
    router.push("/");
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
        <button type="submit" disabled={submitting} className="custom_button">
          {submitting ? "submitting...." : "Add Product"}
        </button>
        <button onClick={handleClose} className="block mt-2">
          Close
        </button>
      </div>
    </form>
  );
}

export default NewProductForm;
