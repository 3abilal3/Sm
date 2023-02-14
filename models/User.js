import mongoose from "mongoose";
import Blog from "./Blog";
const userSchema = mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            
            minlength:4,
            requires:true
        },
        blog:[
            {
                type:mongoose.Types.ObjectId,
                ref:"Blog",
                required:true
            }
        ]
    
    });


export default mongoose.model("User",userSchema);