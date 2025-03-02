const mongoose=require("mongoose");
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const userSchema=new mongoose.Schema({
    fullname:{
        firstname:{
type:String,
required:true,
minlength:[3,'First Name must be three character']
        },
        lastname:{
 type:String,
 required:true,
        }
    },
email:{
    type:String,
    required:true,
    unique:true,
    minlength:[5,"Email must be at least 5 Character"]
},
password:{
 required:true,
 type:String,
select:false,
 minlength:[3,"password must be unque"]
}
  
})
userSchema.methods.generateAuth=function(){
     const token=jwt.sign({_id:this._id},process.env.SECRET,{expiresIn:'24h'})
     return token;
}
userSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password);

}
userSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10);
}
const userModel=mongoose.model('user',userSchema);
module.exports=userModel;