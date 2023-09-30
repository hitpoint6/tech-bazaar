import { model, models, Schema } from "mongoose";

export interface IOrder {
  productId: string;
  productName: string;
  productImage: string;
  price: number;
  quantity: number;
  shippingCompany: string;
  trackingNumber: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

const OrderSchema = new Schema<IOrder>({
  productId: { type: String, required: true },
  productName: { type: String, required: true },
  productImage: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  shippingCompany: { type: String },
  trackingNumber: { type: String },
  status: { type: String, default: "Pending" },
  createdAt: {
    type: String,
    default: new Date().toISOString(),
  },
  updatedAt: { type: String },
});

export const Order = models.Order<IOrder> || model("Order", OrderSchema);
