const express=require("express");
const  ConnectDb = require("./db/DbConnect");
const app=express();
const user_router=require("./routes/useroute")
const cookieParser=require("cookie-parser")
ConnectDb()
const bcrypt = require("bcrypt");
app.use(cookieParser());

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:5173' || 'http://localhost:5174' || 'http://localhost:5175', // Replace with your frontend's URL
    credentials: true, // Allow cookies and authorization headers
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
res.status(201).send("Welcome to our website")
})
app.use("/user",user_router)
app.listen(2000,(req,res)=>{
    console.log("server is connected  in 2000")
})