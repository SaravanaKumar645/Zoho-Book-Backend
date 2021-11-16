// External dependancies
const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  //use _id as invoice number
   user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
    // type: String,
    // required: true,
  },
  customer_name:{
    type:String,
  },
  cemail: {
    type:String,
  
  },
  invoice_date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  due_date: {
    type: Date,
    required: false,
  },
  terms: {
    type: String,
    required: false,
  },
  order_no: {
    type: String,
    required: true,
  },
  sales_person: {
    type: String,
    required: false,
  },
  items: [
    {
      type: {
        type: String,
        required: false,
      },
      name: {
        type: String,
        required: false,
      },
      unit: {
        type: String,
        required: false,
      },
      selling_price: {
        type: String,
        required: false,
      },
      selling_account: {
        type: String,
        required: false,
      },
    },
  ],
  customer_notes: {
    type: String,
    required: false,
  },
  shipping_charges: {
    type: Number,
    required: false,
  },
  adjustment: {
    type: String,
    required: false,
  },
  total: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Invoice", invoiceSchema);
