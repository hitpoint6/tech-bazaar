import { OrderProps } from "@/types/types";
import Orders from "@/components/Orders";
import Header from "@/components/Header";

// const orderData: OrderProps[] = [
//   {
//     _id: "1",
//     productId: "123",
//     orderQuantity: 2,
//     shippingCompany: "DHL",
//     trackingNumber: "12345678",
//     status: "Shipped",
//   },
//   {
//     _id: "2",
//     productId: "456",
//     orderQuantity: 1,
//     shippingCompany: "FedEx",
//     trackingNumber: "87654321",
//     status: "Pending",
//   },
//   {
//     _id: "3",
//     productId: "789",
//     orderQuantity: 3,
//     shippingCompany: "UPS",
//     trackingNumber: "11223344",
//     status: "Delivered",
//   },
//   // ... more order data
// ];

function OrdersPage() {
  return (
    <div className="container mx-auto">
      <Header title="Orders" />
      <Orders />
    </div>
  );
}

export default OrdersPage;
