import { connectToDB } from "@/database/database";
import { Order } from "@/database/Order";

export async function GET(request: any, params: any) {
  try {
    await connectToDB();
    const order = await Order.findById(params.params.orderId);

    return new Response(JSON.stringify(order), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch order", { status: 500 });
  }
}

export const PATCH = async (request: any, params: any) => {
  const data = await request.json();

  try {
    await connectToDB();

    // Find the existing prompt by ID
    const order = await Order.findById(params.params.orderId);

    if (!order) {
      return new Response("Order not found", { status: 404 });
    }

    // Update the prompt with new data
    order.shippingCompany = data.shippingCompany;
    order.trackingNumber = data.trackingNumber;
    order.updatedAt = new Date().toISOString();
    order.status = data.status;

    await order.save();

    return new Response(JSON.stringify(order), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Error Updating Order", { status: 500 });
  }
};
