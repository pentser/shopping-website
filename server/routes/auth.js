import express from "express";
import User from "../models/User.js";
import CryptpJS from "crypto-js";
import jwt from "jsonwebtoken";

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

// LOGIN

router.post("/login",async (req,res)=>{

    try {

        const user= await User.findOne({
            username: req.body.username
        })
        !user && res.status(401).json("Worng credentials");
    
        const hashedPassword= CryptpJS.AES.decrypt(user.password,process.env.PASS_SECRET);
        const passwordS = hashedPassword.toString(CryptpJS.enc.Utf8);
    
        passwordS!==req.body.password &&  res.status(401).json("Worng credentials");

        const accessToken =jwt.sign({
            id:user.id,
            isAdmin:user.isAdmin
        },process.env.JWT_SECRET,{expiresIn:"3d"});
    
        const {password, ...others} = user._doc;
        res.status(200).json({others,accessToken});
    } catch (err){

        res.status(500).json(err);

    }




  
   

});


export default router;

