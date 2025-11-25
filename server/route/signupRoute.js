
const express=require('express');
const router=express.Router();
const User=require('../model/userModel');
const bcrypt=require('bcrypt')

router.post('/signup',async (req,res)=>{
    try{

       
        const {name,email,password}=req.body;
        if(!name || !email ||!password){
                   return res.status(400).json({message:"Must provide name,email,password "});
 
        }
        const hashedPass= await bcrypt.hash(password,8);

         // existing user check garne:
        const existingUser=await User.findOne({email})
     if(existingUser) return  res.status(400).json({message:"User already exists"});
        

        const user= await User.create({
            name,
            email,
            password:hashedPass,
        })
        res.json({message:"SignUp Successfully: ",user});
    }
    catch(error){
        res.status(400).json({message:"Error while signup: ",error});
        console.log("Error while signup: ",error);
    }
});

module.exports=router;