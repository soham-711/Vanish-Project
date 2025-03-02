const userControllers=require("../controllers/User")
const express=require('express');
const router=express.Router();
router.post("/register",userControllers.getRegister);
router.post("/login",userControllers.getlogin)
router.get("/getuser",userControllers.getuserdetails)
module.exports=router;