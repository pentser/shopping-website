import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";
import authRoute from "./routes/auth.js";
import productRoute from "./routes/product.js";
import cartRoute from "./routes/cart.js";
import orderRoute from "./routes/order.js";
import cors from "cors";


console.log(dotenv.config());
const app = express();

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
   console.log("DB connection successful!!")
})
.catch((err)=>{
   console.log(err)
})

app.use(cors({
   origin:"*"
}))
app.use(express.json())
app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);


const PORT= process.env.PORT|| 3001;
app.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`);
})

