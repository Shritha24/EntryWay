import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    sites:[{
        type:mongoose.ObjectId,
        ref:"Site",
    },],
    payment:{},
    customers:{
        type:mongoose.ObjectId,
        ref:'User'

    },
    status:{
        type:String,
        default:'Not confirmed',
        enum:["Not confirmed","Pending","Confirmed","cancel"],
    },
 }
,{timestamps:true});

export default mongoose.model('Order', orderSchema);