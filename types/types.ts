export type ProductProps = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
};

export type OrderStatus = "Pending" | "Shipped" | "Delivered" | "Cancelled";

export type OrderProps = {
  _id: string;
  productId: string;
  quantity: number;
  shippingCompany: string;
  trackingNumber: string;
  status: OrderStatus;
};
