import mongoose from "mongoose";

const orderschema=new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    items:{
        type:[Object],
        required:true,
    },
    amount:{
        type:Number,
        required:true,
    },
    address:{
        type:Object,
        required:true,
    },
    status:{
        type:String,
        default:"food processing"
    },
    Date:{
        type:String,
        default:Date.now()
    },
    payment:{
        type:Boolean,
        default:false,
    },
})

const ordermodel=new mongoose.model("order",orderschema);

export default ordermodel;