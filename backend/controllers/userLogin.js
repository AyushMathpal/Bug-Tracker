const { connect, mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/userSchema");
const validator=require('validator');
const Roles = require("../models/rolesSchema");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("There is some error while connecting the database", error);
  }
};

const userLogin = async (req, res) => {
  const { email, password} = req.body;

  try {
   const user = await User.findOne({ email });
    // console.log(user);
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    ;
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const {authToken,refreshToken} = await user.generateAuthToken();
    console.log("Token Recieved",authToken,refreshToken)
    res.cookie("jwtoken", refreshToken, {
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      path: "/",
    });
    const role=user.role
    const roles=await Roles.findOne({role})
    const access=roles.access
    console.log(access,role)
    // If both email and password are correct, send a success response
    return res.status(200).json({ message: "This is a protected route", user,access,authToken });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const userSignUp = async (req, res) => {
  const { email, password} = req.body;
  console.log(email,password,User)
  try {
    const user = await User.findOne({ email });
    if (user) return res.status(422).json({ error: "Email Already exists" });
    // if(!validator(email))throw new Error("Email is not valid")
    const userData = new User({
      email,
      password,
      role:"user",
    });
    // how to save the rest of the deets
    await userData.save();
    return res.status(200).json({message:"Signup Successful"})
  } catch (error) {
    console.error("Error during signup:", error);
  }
};
module.exports = { userLogin, userSignUp, connectDB };
