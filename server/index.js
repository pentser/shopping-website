import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";
import authRoute from "./routes/auth.js";


console.log(dotenv.config({path:"server/.env"}));
const app = express();

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
   console.log("DB connection successful!!")
})
.catch((err)=>{
   console.log(err)
})

app.use(express.json())
app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);
const PORT= process.env.PORT|| 3001;
app.listen(PORT,()=>{
    console.log(`erver is running on port: ${PORT}`);
})

