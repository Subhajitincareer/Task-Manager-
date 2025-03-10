import jwt from "jsonwebtoken"

export const authenticate=(req, res, next)=>{
const token =req.headers["authorization"];

if(!token) return res.status(401).json({message:"Access Denied, No Token Provided"});
jwt.verify(token, JWT_SECRET,(err, decoded)=>{
if(err){
    return res.status(403).json({message:"Invalid Token"});
}
req.userId=decoded.Id;
next()
} )
}