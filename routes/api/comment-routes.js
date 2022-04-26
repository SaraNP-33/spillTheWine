const express= require('express')
const router = express.Router()
const {Post, User,Comments}= require("../../models")
const withAuth = require("../../utils/auth")


router.post("/", withAuth, async (req,res)=>{
    try{
        console.log(req.body);
    const newComment= await Comments.create(req.body,{
       userId:req.session.userId
      })
      res.status(200).json(newComment)
    } catch(err){
        res.status(400).json(err)
    }
  })

  module.exports=router;