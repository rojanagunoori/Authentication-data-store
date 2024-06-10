const { required } = require("joi");
const mongoose=require("mongoose")
const schema=mongoose.Schema;

const UserSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    createdAt:{
type:Date,
default:Date.now
    }
})

const UserModel=mongoose.model("users",UserSchema)
module.exports=UserModel;