import  express from "express";
import userModel from "../models/user.model.js";
const  router = express.Router();



router.post('/register', async(req, res)=>{
   const {username, password} = req.body;

   const user = await userModel.create({
    username,
    password
   })
   res.status(201).json({
    message: "User registered successfully",
    user
   });
})

router.post('/login', async(req, res)=>{
    const {username, password} = req.body;

    const isUserExists = await userModel.findOne({
        username,
    })
    if(!isUserExists){
        return res.status(401).json({
            message:"username is invalid"
        })
    }
    const isPasswordValid = password == isUserExists.password;
    if(!isPasswordValid){
        return res.status(401).json({
            message:"Invalid password"
        })
    }
    res.status(200).json({
        message: "User logged in successfully",
        user: isUserExists
    })
})  
export default router;