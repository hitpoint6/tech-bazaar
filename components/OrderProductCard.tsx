type OrderProductCardProps = {
  image: string;
  productId: string;
  productName: string;
  quantity: number;
  price: number;
};

function OrderProductCard(order: OrderProductCardProps) {
  return (
    <>
      <img
        src={order.image}
        alt={order.productName}
        className="rounded-md w-32 h-32 object-cover mb-4"
      />{" "}
      <p>Product ID: {order.productId}</p>
      <p>Product Name: {order.productName}</p>
      <p>Quantity: {order.quantity}</p>
      <p>Order total: ${order.price.toFixed(2)}</p>
    </>
  );
}

export default OrderProductCard;
