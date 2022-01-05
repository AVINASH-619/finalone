const express=require('express')
const router=express.Router()
const Candidate=require('./electionSchema')
router.post('/election',async (req,res)=>{
    const {name,partyname,age,type,image,t}=req.body
try{
    if(!name || !partyname || !age || !type|| !image){
        console.log(`enter the complete data`)
        return res.status(422).json({message:'fill the details completely'})
    }
    // const candidateExist=await Candidate.findOne({partyname:partyname})
    // if(candidateExist){
    //     console.log('Already exists')
    //     return res.status(422).json({message:'user already exists'})
    // }
    const candidate=new Candidate({name,partyname,age,type,image,t})
    await candidate.save()
    return res.status(201).json({'message':'user registered successfully'})
}
catch(error){
    console.log(error.response)
}

})
module.exports=router