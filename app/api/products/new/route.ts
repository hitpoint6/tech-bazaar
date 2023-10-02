import { connectToDB } from "@/database/database";
import { Product } from "@/database/Product";

export const POST = async (request: Request) => {
  const { name, description, price, quantity, image } = await request.json();
  try {
    await connectToDB();

    const createdAt = new Date().toISOString();

    const product = await Product.create({
      name,
      description,
      price,
      quantity,
      image,
      createdAt,
    });

    return new Response(JSON.stringify(product), { status: 200 });
  } catch (error) {
    return new Response("Failed to create product", { status: 500 });
  }
};
