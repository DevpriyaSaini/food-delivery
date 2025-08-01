import mongoose, { mongo, Mongoose } from "mongoose";

const foodschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
   Price:{
        type:Number,
        required:true,
    },
   image:{
        type:String,
        // required:true,
    },
    category:{
        type:String,
        required:true,
    }
},{timestamps:true})

const foodmodel=mongoose.model("food",foodschema);
export default foodmodel;