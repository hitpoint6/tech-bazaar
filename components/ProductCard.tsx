import Link from "next/link";
import { ProductProps } from "../types/types";

type ProductCardProps = {
  product: ProductProps;
  onCardClick: (product: ProductProps) => void;
};

function ProductCard({ product, onCardClick }: ProductCardProps) {
  return (
    <div className=" bg-white shadow-md p-4 m-4 rounded-md max-w-xs">
      <img
        src={product.image}
        alt={product.name}
        className="rounded-md w-32 h-32 object-cover mb-4"
      />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p>{product.description}</p>
      <p className="text-lg">${product.price.toFixed(2)}</p>
      <p>Available Quantity: {product.quantity}</p>
      <div className="flex space-x-4">
        <button
          type="button"
          onClick={() => onCardClick(product)}
          className="custom_button shift_up_card"
        >
          Buy
        </button>
        <Link
          href={`/products/${product._id}/update`}
          className="custom_button-outline"
        >
          Update
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
