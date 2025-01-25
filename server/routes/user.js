import express from "express";
import User from "../models/User.js";

const router= express.Router();

//Signup 
router.post("/register",(req,res)=>{
    const newUser= new User
})

export default router;
