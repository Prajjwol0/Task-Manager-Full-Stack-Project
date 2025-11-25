
const jwt=require("jsonwebtoken")

module.exports =(req,res)=>{
try{
        const header=req.headers.authorization;
if(!header){
    res.status(401).json({message:"No token provided"});
}

const token=header.split(" ")[1];          //Extract only the token || The header looks like:Bearer abcdefgh123456

const decoded=jwt.verify(token,env.process.JWTSECRET);  // Try verifying the token
req.user=decoded;//This gives access to the logged-in user's data in all protected routes.
next()   //Since token is valid, move to the actual route handler.
}
catch (err) {
    return res.status(401).json({ message: "Invalid token" });
}
}



