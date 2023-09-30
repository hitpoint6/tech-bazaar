import { connectToDB } from "@/utils/database";
import { Order } from "@/models/Order";

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
    const existingOrder = await Order.findById(params.params.orderId);

    if (!existingOrder) {
      return new Response("Order not found", { status: 404 });
    }

    // Update the prompt with new data
    existingOrder.shippingCompany = data.shippingCompany;
    existingOrder.trackingNumber = data.trackingNumber;
    existingOrder.updatedAt = new Date().toISOString();
    existingOrder.status = data.status;

    await existingOrder.save();

    return new Response("Successfully updated the Order", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Error Updating Order", { status: 500 });
  }
};