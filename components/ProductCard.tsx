import Link from "next/link";
import { ProductProps } from "../types/types";
import Modal from "@/components/CreateOrderModal";
import { useState } from "react";
import { useRouter } from "next/navigation";

type ProductCardProps = {
  product: ProductProps;
};

function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handleBuyClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleProductClick = () => {
    router.push(`/products/${product._id}`);
  };

  return (
    <div className=" bg-white shadow-md p-4 m-4 rounded-md max-w-xs">
      <img
        src={product.image}
        alt={product.name}
        onClick={handleProductClick}
        className="rounded-md w-32 h-32 object-cover mb-4 shift_up_card"
      />
      <h3
        onClick={handleProductClick}
        className="text-lg font-semibold mt-2 shift_up_card"
      >
        {product.name}
      </h3>
      <p>{product.description}</p>
      <p className="text-lg">${product.price.toFixed(2)}</p>
      <p>Available Quantity: {product.quantity}</p>
      <div className="flex space-x-4">
        <button
          type="button"
          onClick={handleBuyClick}
          className="custom_button shift_up_card"
        >
          Buy
        </button>
        <Link
          href={`/products/${product._id}/update`}
          className="custom_button_outline"
        >
          Update
        </Link>
      </div>
      {showModal && (
        <Modal
          product={product}
          onClose={handleCloseModal}
          showModal={showModal}
        />
      )}
    </div>
  );
}

export default ProductCard;
