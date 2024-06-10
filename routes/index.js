const express=require("express");
const { registerUser, loginUser, getUsers } = require("../useController");
const { userRegisterValidation, userLoginValidate } = require("../utils/userValidation");
const { ensureAuthenticated } = require("../utils/auth");

const routes=express.Router();


routes.post("/register",userRegisterValidation,registerUser)

routes.post("/login",userLoginValidate,loginUser)

routes.get("/users",ensureAuthenticated,getUsers)

module.exports=routes