const express=require("express")
const routes=require("./routes");
const bodyParser = require("body-parser");
const app=express()
const path=require("path")
const bcrypt = require("bcrypt");
const UserModel = require("./models/userModel");

require("dotenv").config();
require("./config/db")

const PORT=process.env.PORT || 8080;
app.use(bodyParser.json())
app.use("/api/v1",routes)
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.get('/api/v1/login', (req, res) => {
    res.render('login');
});
app.get("/api/v1/register",(req,res)=>{
   
    res.render("register")
})

app.get('/api/v1/users', (req, res) => {
    
    const usersData = []; 
    res.status(200).json({ data: usersData });
});





app.listen(PORT,()=>{
    console.log(`server is up and running onPort:${PORT}`)
})

