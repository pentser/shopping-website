import express from "express";
import User from "../models/User.js";
import CryptpJS from "crypto-js";

const router= express.Router();

//Signup 
router.post("/register",async (req,res)=>{
    const newUser= new User({
        username:req.body.username,
        email:req.body.email,
        password:CryptpJS.AES.encrypt(req.body.password,process.env.PASS_SECRET).toString()
    })

    try {

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch(err) {
        res.status(500).json(err);
    }

})

export default router;

