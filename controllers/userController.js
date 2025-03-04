import User from "../models/user.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const signUp=async(req, res)=>{
    try {
         const {name, email,password}=req.body
         const existUser=await User.findOne({email});
         if(existUser){
             return res.status(400).json({message: "User already exists"})
    
         }
         const user=User({
            name,
            email,
            password,
         });
        await user.save();
      
        const token =jwt.sign({id:user._id}, process.env.JWT_SECRET,{expiresIn:3600})
        res.token
        res.cookie("token", token ,{
            secure:process.env.NODE_ENV==="production"
        }) 
         res.status(200).json({
            message:"user created successfully"
        })
    } catch (error) {
        res.status(500).json({
            Message: "user created failed",
            error:error.message,
        })
    }
}
const Loging=async (req,res) => {
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({message: "User not found"})
        }
        const isMatch=await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message: "Invalid credentials"})
        }
        const token=jwt.sign({id:user.id}, JWT_SECRET, {expiresIn :"1h"});
    res.cookie("token",token,{httpOnly:true}).json({message:"Login successful"})
    } catch (error) {
        res.status(500).json({ 
            error: error.message,
        })
    }
}

const Logout= async (req, res) => {
    res.clearCookie("token").json({
        message:"Logged out sucessfully"
    })
}

const profile=async (req,res) => {
    const token = req.cookies.token;
    if (!token)return res.status(401).json({
        error:"unauthorizec"
    })

    jwt.verify(token, "namobharat12345",(err,decoded)=>{
        if(err)return res.status(500).json({error:"token invalid"})
    })
res.json({
    message:"Acesss granted ", userId: decoded.userId
})
}

export {signUp, Loging, Logout , profile};