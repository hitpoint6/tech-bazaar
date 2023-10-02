import { connectToDB } from "@/database/database";
import { Product } from "@/database/Product";

export const GET = async (req: any) => {
  try {
    await connectToDB();

    const { URL } = require("url");
    const url = new URL(req.url);

    const page = parseInt(url.searchParams.get("page"), 10) || 1;
    const limit = parseInt(url.searchParams.get("limit"), 10) || 10;

    const skip = (page - 1) * limit;
    const products = await Product.find({})
      .sort("-createdAt")
      .skip(skip)
      .limit(limit);

    const total = await Product.countDocuments();
    const totalPages = Math.ceil(total / limit);

    return new Response(JSON.stringify({ products, totalPages }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch all products", { status: 500 });
  }
};
