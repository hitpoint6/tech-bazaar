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
