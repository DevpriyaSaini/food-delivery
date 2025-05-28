import usermodel from "../models/user.js";
import Jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"

//login user
async function loginuser(req,res) {
    const {email,password}=req.body;
    try {
        const user=await usermodel.findOne({email});
    if(!user){
        return res.json({sucess:false,message:"User does not exit"})
    }

    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.json({sucess:false,message:"Wrong password"});

    }

    const token = createtoken(user._id);
    res.json({sucess:true,token});
    } catch (error) {
        console.log(error);
        res.json({sucess:false,message:"Error"});
        
    }
}


//create token

const createtoken=(id)=>{
    return Jwt.sign({id},process.env.JWT_SECRET)
}



async function signup(req,res){
   
    
    const{name,email,password}=req.body;
     try {
       const exist=await usermodel.findOne({email});
       if(exist){
        return res.json({sucess:false,message:"user already exist"})
       }
       if(!validator.isEmail(email)){
            return res.json({sucess:false,message:"Please enter valid email"})
        }
        if(password.length<6){
           return res.json({sucess:false,message:"password should greater then 6 char"})  
        }

        //hasing userpass
        const salt=await bcrypt.genSalt(10);
        const hasspassword=await bcrypt.hash(password,salt)

        const newuser= await usermodel.create({
           name,
           email,
           password:hasspassword,
            
        })
        const token =createtoken(newuser._id);
        res.json({sucess:true,token});
     } catch (error) {
        console.log(error);
        res.json({sucess:false,message:"Error"})
        
     }
}

export {loginuser,signup}