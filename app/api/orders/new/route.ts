import { connectToDB } from "@/database/database";
import { Order } from "@/database/Order";

export const POST = async (request: Request) => {
  const { productId, productName, productImage, price, quantity } =
    await request.json();

  try {
    await connectToDB();
    const createdAt = new Date().toISOString();
    console.log(createdAt);

    const order = await Order.create({
      productId,
      quantity,
      productName,
      productImage,
      price,
      createdAt,
    });

    return new Response(JSON.stringify(order), { status: 200 });
  } catch (error) {
    console.log(error);

    return new Response("Failed to create order", { status: 500 });
  }
};
