// External dependancies
const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    
    ref: "user",
    required:true,
    
  },

  type: {
    type: String,
    required: true,
  },
  name: {
    type: String
  },
  unit: {
    type: String,
  },
  selling_price: {
    type: String,
  },
  quantity:{
    type: String,
    required: false,
  },
  amount:{
    type: String,
    required: false,
  },
  selling_account: {
    type: String,
    required: false,
  },
  selling_description: {
    type: String,
  },
  purchase_price: {
    type: String,
    required: false,
  },
  purchase_account: {
    type: String,
    required: false,
  },
  purchase_description: {
    type: String,
  },
});

module.exports = mongoose.model("Item", itemSchema);
