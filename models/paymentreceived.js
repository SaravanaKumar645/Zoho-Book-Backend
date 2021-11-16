const mongoose = require('mongoose');
const payrecevSchema = new mongoose.Schema({
    customer_name:{
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
      cemail: {
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
    deposited:{
        type:String
    },
    reference:{
        type:String
    },
    status:{
        type:String,
        default:"paid",
        enum: ['paid','pending']
    },
})
module.exports = mongoose.model('payrecev',payrecevSchema)