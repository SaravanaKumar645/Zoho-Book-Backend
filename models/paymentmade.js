const mongoose = require('mongoose');
const paymadeSchema = new mongoose.Schema({
    vendor_name:{
        type:String,
        min:2,
        max:20,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user",
        type: String,
        required: true,
      },
     
      vemail: {
        type:String,
      
      },
    amount:{
        type:String,
        min:0,
        max:20,
    },
    paymentDate:{
        type:String,
        
    },
    paymentmode:{
        type:String
    },
    paymentthrough:{
        type:String
    },
    reference:{
        type:String
    },
    status:{
        type:String,
        default:"pending",
        enum: ['paid','pending']
    },
})
module.exports = mongoose.model('paymemtmade',paymadeSchema)