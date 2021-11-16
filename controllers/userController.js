const User = require('../models/user')
const boom =require('boom')
exports.signup =async(req,reply)=>{
    const {firstname,lastname,email,password}=req.body
    try{
        const newuser ={
            firstname,
            lastname,
            email,
            password
        }
        const user = new User(newuser)
        const saveduser =await user.save() 
        return reply.send(saveduser)
    }
    catch(err){
        return reply.send({error:"email id already exist"})
    }

    
}