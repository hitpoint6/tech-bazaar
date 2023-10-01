import { model, models, Schema } from "mongoose";

export interface IProduct {
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  createdAt: string;
  updatedAt: string;
}

const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  quantity: { type: Number, required: true },
  image: { type: String },
  createdAt: {
    type: String,
  },
  updatedAt: { type: String },
});

export const Product =
  models.Product<IProduct> || model("Product", ProductSchema);
