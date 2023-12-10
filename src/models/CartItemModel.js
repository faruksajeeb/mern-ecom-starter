const mongoose = require("mongoose");
const cartItemSchema = mongoose.Schema(
  {
    user: {type:mongoose.Schema.Types.ObjectId,required:true},
    product: {type:mongoose.Schema.Types.ObjectId,required:true},
    quantity: { type: Number, required: true, min: 0 }
  },
  { timestamps: true, versionKey: false }
);
const CartItemModel = mongoose.model("cart_items", cartItemSchema);
module.exports = CartItemModel;