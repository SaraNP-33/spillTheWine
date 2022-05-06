const express= require('express')
const router = express.Router()
const {Post, User,Comments}= require("../../models")
const withAuth = require("../../utils/auth")


router.post("/", withAuth, async (req,res)=>{
    try{
        // console.log(req.body, req.session.userId ," is the user present here?");
    const newComment= await Comments.create({
        body:req.body.body,
        postId:req.body.postId,
       userId:req.session.userId
      })
    //   console.log(newComment, "where is my user??")
      res.status(200).json(newComment)
    } catch(err){
        res.status(400).json(err)
    }
  })



  module.exports=router;