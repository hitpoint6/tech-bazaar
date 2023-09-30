import { OrderProps, ProductProps } from "@/types/types";
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
  const [order, setOrder] = useState<OrderProps>({
    _id: "",
    productId: product._id,
    productName: product.name,
    productImage: product.image,
    price: product.price * 1,
    quantity: 1,
    shippingCompany: "",
    trackingNumber: "",
    status: "Pending",
  });

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const totalPrice = parseInt(value) * product.price;

    setOrder({ ...order, [name]: value, price: totalPrice });
  };

  async function handleSubmit(e: React.FormEvent) {
    if (!product) return;
    console.log(order);

    e.preventDefault();
    try {
      const response = await fetch(`/api/orders/new`, {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
          "Content-Type": "application/json",
        },
      });

      product.quantity -= order.quantity;

      const productRes = await fetch(`/api/products/${product._id}`, {
        method: "PATCH",
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (productRes.ok) {
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
        <p className="text-lg">${product.price}</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="quantity" className="input_label">
            Quantity ({product.quantity} avaliable):
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={order.quantity}
              min="1"
              max={product.quantity}
              onChange={handleQuantityChange}
              className="input_field"
            />
          </label>
          <p className="text-lg">Current Total: ${order.price}</p>
          <div className="flex space-x-4">
            <button
              type="submit"
              disabled={submitting}
              className="custom_button"
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
