import express from "express";
import User from "../models/User.js";

const router= express.Router();

//Signup 
router.post("/register",async (req,res)=>{
    const newUser= new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })

    try {

        const savedUser = await newUser.save();
        res.status(201).json(saveUser);
    } catch(err) {
        ewa.status(500).json(err);
    }

})

export default router;

