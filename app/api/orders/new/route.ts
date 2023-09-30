import { connectToDB } from "@/utils/database";
import { Order } from "@/models/Order";

export const POST = async (request: Request) => {
  const { productId, productName, productImage, price, quantity } =
    await request.json();

  console.log("$$$$$$4", productId, productName, productImage, price, quantity);

  try {
    await connectToDB();
    console.log(productId, quantity);

    const order = await Order.create({
      productId,
      quantity,
      productName,
      productImage,
      price,
    });

    return new Response(JSON.stringify(order), { status: 200 });
  } catch (error) {
    console.log(error);

    return new Response("Failed to create order", { status: 500 });
  }
};
