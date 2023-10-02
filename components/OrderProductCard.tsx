type OrderProductCardProps = {
  productImage: string;
  productId: string;
  productName: string;
  quantity: number;
  price: number;
};

function OrderProductCard(order: OrderProductCardProps) {
  return (
    <section className="my-4">
      <img
        src={order.productImage}
        alt={order.productName}
        className="rounded-md w-32 h-32 object-cover my-5"
      />{" "}
      <p>Product ID: {order.productId}</p>
      <p>Product Name: {order.productName}</p>
      <p>Quantity: {order.quantity}</p>
      <p>Order total: ${order.price.toFixed(2)}</p>
    </section>
  );
}

export default OrderProductCard;
