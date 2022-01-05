const express=require('express')
const router=express.Router()
const User=require('./userSchema')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
router.post('/register',async (req,res)=>{ 
try{
    const {firstname,lastname,mobile,email,password}=req.body
    if(!firstname || !lastname || !mobile || !email || !password){
        console.log(`enter the complete data`)
        return res.send({status:404,message:'enter complete data'})
    }
    const userExist=await User.findOne({email:email})
    if(userExist){
    //    
    return res.send({status:404,message:'user already exists'})
        // return res.send('enter correct details')
    }
    const user=new User({firstname,lastname,mobile,email,password})
    await user.save()
    return res.status(201).json({'message':'user registered successfully'})
}
catch(error){
    // res.status(422).send('enter correct details')
    console.log(error)
}

})
//login route
router.post('/signin',async (req,res)=>{
try{
    let token
    const {email,password}=req.body
    if(!email || !password){
        console.log(`enter the complete data`)
        return res.send({status:400,message:'enter complete data'})
    }
    const userLogin=await User.findOne({email:email})
    if(userLogin){
    const match=await bcrypt.compare(password,userLogin.password)
    
     token=await userLogin.generateAuthToken()
     res.cookie('jwtoken',token,{
         expires:new Date(Date.now()+25892000000),httpOnly:true,
     })
    if(match) 
       return res.status(201).send('user found')
    else
    //  return res.status(400).json({message:'fill the details completely'})
    return res.send({status:400,message:'enter valid data'})
    }
    else
//      return res.status(400).json({message:'fill the details completely'})
    return res.send({status:400,message:'enter valid data'})
 }
catch(error){
    // res.status(400).send('enter correct details')
    console.log(error)
}

})
module.exports=router