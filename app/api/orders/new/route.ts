import { connectToDB } from "@/utils/database";
import { Order } from "@/models/Order";

export const POST = async (request: Request) => {
  const { productId, quantity } = await request.json();
  try {
    await connectToDB();
    console.log(productId, quantity);

    const order = await Order.create({
      productId,
      quantity,
    });

    return new Response(JSON.stringify(order), { status: 200 });
  } catch (error) {
    console.log(error);

    return new Response("Failed to create order", { status: 500 });
  }
};
