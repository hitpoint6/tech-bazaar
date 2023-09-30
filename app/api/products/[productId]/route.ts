import { connectToDB } from "@/utils/database";
import { Product } from "@/models/Product";

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
  console.log(data);

  try {
    await connectToDB();

    // Find the existing prompt by ID
    const existingProduct = await Product.findById(params.params.productId);

    if (!existingProduct) {
      return new Response("Order not found", { status: 404 });
    }

    // Update the prompt with new data
    existingProduct.name = data.name;
    existingProduct.description = data.description;
    existingProduct.price = data.price;
    existingProduct.image = data.image;
    existingProduct.quantity = data.quantity;

    await existingProduct.save();

    return new Response("Successfully updated the Product", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Error Updating Product", { status: 500 });
  }
};