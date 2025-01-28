import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {type:String,required:true,unique:true},
    price: {type:Number,required:true},
    description: {type:String,required:true}, 
    image: {type:String,required:true}, 
    category: {type:String},
    rating:{type:Object}
  }
,
{timestamps:true});

export default mongoose.model("Product",ProductSchema);
