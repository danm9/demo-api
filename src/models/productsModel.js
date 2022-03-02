import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ProductSchema = new Schema({
  productId: {
    type: Number,
    required: "Enter a product ID",
  },
  productName: {
    type: String,
    required: "Enter a product name",
  },
  category: {
    type: String,
    required: "Enter a product category",
  },
  inStock: {
    type: Number,
    required: "Enter the stock count",
  },
});
