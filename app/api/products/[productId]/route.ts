import { connectToDB } from "@/database/database";
import { Product } from "@/database/Product";

export async function GET(request: any, params: any) {
  try {
    await connectToDB();
    const product = await Product.findById(params.params.productId);

    return new Response(JSON.stringify(product), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch product", { status: 500 });
  }
}

export const PATCH = async (request: any, params: any) => {
  const data = await request.json();
  try {
    await connectToDB();

    // Find the existing prompt by ID
    const product = await Product.findById(params.params.productId);

    if (!product) {
      return new Response("Order not found", { status: 404 });
    }

    // Update the prompt with new data
    product.name = data.name;
    product.description = data.description;
    product.price = data.price;
    product.image = data.image;
    product.quantity = data.quantity;
    product.updatedAt = new Date().toISOString();

    await product.save();

    return new Response(JSON.stringify(product), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Error Updating Product", { status: 500 });
  }
};
