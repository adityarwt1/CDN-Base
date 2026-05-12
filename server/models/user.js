import mongoose from 'mongoose'

const UserModule = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }

},{
    timestamps:true
})
const UserModule = mongoose.models.User || mongoose.model("User", UserModule);
export default UserModule