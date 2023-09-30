import { connectToDB } from "@/utils/database";
import { Product } from "@/models/Product";

export const POST = async (request: Request) => {
  const { name, description, price, quantity, image } = await request.json();
  try {
    await connectToDB();

    const product = await Product.create({
      name,
      description,
      price,
      quantity,
      image,
    });

    return new Response(JSON.stringify(product), { status: 200 });
  } catch (error) {
    return new Response("Failed to create product", { status: 500 });
  }
};
