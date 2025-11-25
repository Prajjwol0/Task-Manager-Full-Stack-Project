const User=require('../model/userModel')

const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const express=require('express')
const router=express.Router()
router.post('/login',async (req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email});
          if( !email ||!password){
                   return res.status(400).json({message:"Must provide email or password "});
 
        }
        if(!user){
            return res.status(400).json({message:"Email Or Password Incorrect"});
        }

        const match=await bcrypt.compare(password,user.password);
        if(!match){
            return res.status(400).json({message:"Email Or Password Incorrect"});
        }
        const token=jwt.sign(
            {id:user._id},
            process.env.JWTSECRET,
            {expiresIn:"2d"}
        )
         res.status(200).json({message:"Logged In success",
            token,
            user:{
                id:user._id,
                name:user.id,
                email:user.email
            }
         });


    } catch (error) {
         res.status(400).json({message:"Error while login: ",error});
        console.log("Error while login: ",error);
    }
})

module.exports=router;