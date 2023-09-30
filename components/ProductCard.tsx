import { ProductProps } from "../types/types";

type ProductCardProps = {
  product: ProductProps;
  onCardClick: (product: ProductProps) => void;
};

function ProductCard({ product, onCardClick }: ProductCardProps) {
  return (
    <div
      className="transform transition-transform duration-300 ease-in-out hover:-translate-y-2 cursor-pointer bg-white shadow-md p-4 m-4 rounded-md max-w-xs"
      onClick={() => onCardClick(product)}
    >
      <img
        src={product.image}
        alt={product.name}
        className="rounded-md w-32 h-32 object-cover mb-4"
      />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p>{product.description}</p>
      <p className="text-lg">${product.price.toFixed(2)}</p>
      <p>Available Quantity: {product.quantity}</p>
    </div>
  );
}

export default ProductCard;
