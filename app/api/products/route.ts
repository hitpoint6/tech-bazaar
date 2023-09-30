import { connectToDB } from "@/utils/database";
import { Product } from "@/models/Product";

export const GET = async () => {
  try {
    await connectToDB();

    const products = await Product.find({});

    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch all products", { status: 500 });
  }
};
