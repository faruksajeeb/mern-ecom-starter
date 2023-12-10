const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, min: 0, integer: true },
    category: { type: String,required: true },
    imageURL: { type: String }
  },
  { timestamps: true, versionKey: false }
);
const ProductModel = mongoose.model("products", productSchema);
module.exports = ProductModel;
