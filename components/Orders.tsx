// "use client";
// import { OrderProps } from "@/types/types";
// import OrderCard from "./OrderCard";
// import { useState, useEffect } from "react";

// function Orders() {
//   const [allOrders, setAllOrders] = useState<OrderProps[]>([]);
//   const [page, setPage] = useState<number>(1);
//   const [totalPages, setTotalPages] = useState<number>(10);

//   async function getOrders() {
//     const response = await fetch(`/api/orders?page=${page}&limit=10`);
//     const data = await response.json();
//     setTotalPages(data.totalPages);
//     setAllOrders((prevOrders) => [...prevOrders, ...data.orders]);
//   }

//   useEffect(() => {
//     getOrders();
//   }, [page]);

//   const handleScroll = () => {
//     if (
//       window.innerHeight + window.scrollY >=
//       document.documentElement.scrollHeight
//     ) {
//       if (page < totalPages) {
//         setPage((prevPage) => prevPage + 1);
//       }
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="p-4">
//       {allOrders.map((order) => (
//         <OrderCard key={order._id} order={order} />
//       ))}
//     </div>
//   );
// }

// export default Orders;

import { OrderProps } from "@/types/types";
import OrderCard from "@/components/OrderCard";

export default async function Orders({ orders }: { orders: OrderProps[] }) {
  return (
    <>
      <section className="p-4">
        {orders.map((order: OrderProps) => (
          <OrderCard order={order} />
        ))}
      </section>
    </>
  );
}
