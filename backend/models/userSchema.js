const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt=require('jsonwebtoken')
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  token:String,
  role:String,
});
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});
userSchema.methods.generateAuthToken=async function(){
  try{
    let authToken=jwt.sign({_id:this._id},process.env.SECRET_KEY,{ expiresIn: '900s' })
    let refreshToken=jwt.sign({_id:this._id},process.env.REFRESH_SECRET_KEY,{ expiresIn: '30d' })
    await this.updateOne({_id:this._id},{token:refreshToken});
    console.log("Token Generated",authToken,refreshToken)
    const tokens={authToken,refreshToken}
    return tokens;
  }
  catch(error){
    console.log("Failed to generate Auth Token",error)
  };
}
module.exports = mongoose.model('User', userSchema);
