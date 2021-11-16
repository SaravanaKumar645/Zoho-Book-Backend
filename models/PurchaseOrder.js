// External dependancies
const mongoose = require("mongoose");

const purchaseOrderSchema = new mongoose.Schema({
  //use _id as purchase order number
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
    
  },
  vendor:{
    type:String,
  },
  deliver_to: {
    type: String,
    required: true,
  },
  reference: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  expected_delivery_date: {
    type: Date,
    required: false,
  },
  payment_terms: {
    type: String,
    required: false,
  },
  shipment_preference: {
    type: String,
    required: false,
  },
  items: [
    {
      type: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      unit: {
        type: String,
        required: true,
      },
      selling_price: {
        type: String,
        required: true,
      },
      selling_account: {
        type: String,
        required: true,
      },
    },
  ],
  customer_notes: {
    type: String,
    required: false,
  },
  discount: {
    type: Number,
    required: false,
  },
  tcs: {
    type: String,
    required: false,
  },
  total: {
    type: Number,
    required: true,
  },
  terms: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("PurchaseOrder", purchaseOrderSchema);
