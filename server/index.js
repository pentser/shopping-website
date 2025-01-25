import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
   console.log("DB connection successful!!!")
})
.catch((err)=>{
   console.log(err)
})

const PORT= process.env.PORT;
app.listen(PORT,()=>{
    console.log(`erver is running on port: ${PORT}`);
})

