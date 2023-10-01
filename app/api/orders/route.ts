import { connectToDB } from "@/utils/database";
import { Order } from "@/models/Order";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    await connectToDB();

    const page = parseInt(request.nextUrl.searchParams.get("page") || "1");
    const limit = parseInt(request.nextUrl.searchParams.get("limit") || "10");

    const skip = (page - 1) * limit;
    const orders = await Order.find({}).skip(skip).limit(limit);

    const total = await Order.countDocuments();
    const totalPages = Math.ceil(total / limit);

    return new Response(JSON.stringify({ orders, totalPages }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch all orders", { status: 500 });
  }
};
