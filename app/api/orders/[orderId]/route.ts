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
