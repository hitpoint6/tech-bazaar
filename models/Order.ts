import { model, models, Schema } from "mongoose";

export interface IOrder {
  productId: string;
  quantity: number;
  shippingCompany: string;
  trackingNumber: string;
  status: string;
}

const OrderSchema = new Schema<IOrder>({
  productId: { type: String, required: true },
  quantity: { type: Number, required: true },
  shippingCompany: { type: String },
  trackingNumber: { type: String },
  status: { type: String, default: "Pending" },
});

export const Order = models.Order<IOrder> || model("Order", OrderSchema);
