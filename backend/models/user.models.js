import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   googleId:String,
   displayName: String,
   email: String,
   imgae: String,
},{
    timestamps:true
});

const User = mongoose.model("User",userSchema);

export default User;