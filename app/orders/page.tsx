import Orders from "@/components/Orders";
import Header from "@/components/Header";

function OrdersPage() {
  return (
    <div className="container mx-auto">
      <Header title="Orders" />
      <Orders />
    </div>
  );
}

export default OrdersPage;
