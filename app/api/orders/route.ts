import { connectToDB } from "@/utils/database";
import { Order } from "@/models/Order";

export const GET = async () => {
  try {
    await connectToDB();

    const products = await Order.find({});

    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all products", { status: 500 });
  }
};
