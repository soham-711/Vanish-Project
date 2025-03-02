const mongoose=require("mongoose");
require("dotenv").config();
 function ConnectDb(){
    mongoose.connect(process.env.DB_CONNECT).then(()=>{
        console.log("db is connected")
    }).catch(error=>console.log(error))
}
module.exports=ConnectDb