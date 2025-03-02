// const UserModel =require('../models/User-Register')

// module.exports.getRegister=async(req,res,next)=>{

// const{fullname,email,password}=req.body;

// const find_user=await UserModel.findOne({email}) ;
// console.log(find_user)
// if(find_user){
//     return res.status(400).send("user already exists");
// }
// const hashPassword=await UserModel.hashPassword(password)
// try{
//     const captain=await UserModel.create({
//         fullname,
//         email,
//        password: hashPassword
//     })
//     const token=captain.generateAuth();
//     console.log(token)
//     return res.status(201).json({token,user:captain});
// }
// catch(error){
//     return res.send(400).send(error);
// }

// }
const UserModel = require("../models/User-Register");
const jwt = require("jsonwebtoken");
module.exports.getRegister = async (req, res, next) => {
  const { fullname, email, password } = req.body;

  try {
    // Check if the user already exists
    const find_user = await UserModel.findOne({ email });
    // console.log(find_user);

    if (find_user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashPassword = await UserModel.hashPassword(password);

    // Create a new user
    const captain = await UserModel.create({
      fullname, // Ensure fullname is passed correctly
      email,
      password: hashPassword,
    });
    console.log(captain);
    // Generate JWT token
    const token = captain.generateAuth();

    return res.status(200).json({ token, user: captain });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports.getlogin = async (req, res, next) => {
  const { email, password } = req.body;

  const user_found = await UserModel.findOne({ email }).select("+password");
  console.log(user_found);
  if (!user_found) {
    return res.status(401).json({ message: "invalid email or password" });
  }
  const is_match_password = await user_found.comparePassword(password);
  console.log(is_match_password);
  if (!is_match_password) {
    return res.status(401).json({ message: "invalid user name or password" });
  }
  const token = await user_found.generateAuth();
  res.cookie("token", token, {
    httpOnly: true, // Prevents client-side JS access (better security)
    secure: false, // Set to true if using HTTPS
    sameSite: "Lax", // Helps with cross-origin cookie issues
  });
  console.log(req.cookies);
  return res.status(200).json({ token: token, user: user_found });
};
module.exports.getuserdetails = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token)
      return res.status(401).json({ error: "Unauthorized: No token provided" });
    const { _id } = jwt.verify(token, process.env.SECRET);

    const user = await UserModel.findById(_id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.json({ user: user });
  } catch (error) {
    return res.status(401).json({ error: "invalid or expired token" });
  }
};
