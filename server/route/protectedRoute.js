const auth=require('../middleware/authMiddleware')
const express = require('express'); 
const router=express.Router()

router.get('/dashboard',(req,res)=>{
    res.json({
        message:"Welcome to you dashboard",
        user:req.user
    })
})
module.exports=router