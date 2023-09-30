import { ProductProps } from "@/types/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

type ModalProps = {
  product: ProductProps | null;
  onClose: () => void;
};

function Modal({ product, onClose }: ModalProps) {
  if (!product) return null;

  const router = useRouter();
  const [submitting, setIsSubmitting] = useState(false);
  const [order, setOrder] = useState({
    productId: product._id,
    quantity: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await fetch(`/api/orders/new`, {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        router.push("/orders");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-700 bg-opacity-50">
      <div className="bg-white p-8 rounded-md shadow-lg w-3/4 max-w-lg">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-lg">{product.price}</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="quantity" className="block text-sm font-semibold">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={order.quantity}
            min="1"
            max={product.quantity}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
          <div className="flex space-x-4">
            <button
              type="submit"
              disabled={submitting}
              className="block bg-reebelo-blue p-2 rounded-md mt-2"
            >
              {submitting ? "submitting...." : "Buy"}
            </button>
            <button onClick={onClose} className="block mt-2">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
