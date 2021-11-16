const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        min:2,
        max:20,
    },
    lastname:{
        type:String,
        min:0,
        max:20,
    },
    email:{
        type:String,
        
    },
    password:{
        type:String
    }
})
module.exports = mongoose.model('user',userSchema)