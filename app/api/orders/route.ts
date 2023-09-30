import { connectToDB } from "@/utils/database";
import { Order } from "@/models/Order";

export const GET = async (req: any) => {
  try {
    await connectToDB();
    const { URL } = require("url");
    const url = new URL(req.url);

    const page = parseInt(url.searchParams.get("page"), 10) || 1;
    console.log("page", page);

    const limit = parseInt(url.searchParams.get("limit"), 10) || 10;

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
