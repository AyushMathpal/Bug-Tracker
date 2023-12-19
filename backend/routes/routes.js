const express=require('express')
const router=express.Router()
router.get('/',(req,res)=>{res.json({message:"This request is working"})})
module.exports=router