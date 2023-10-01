import { connectToDB } from "@/database/database";
import { Product } from "@/database/Product";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    await connectToDB();

    const page = parseInt(request.nextUrl.searchParams.get("page") || "1");
    const limit = parseInt(request.nextUrl.searchParams.get("limit") || "10");

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
