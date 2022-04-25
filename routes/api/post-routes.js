const express= require('express')
const router = express.Router()
const {Post, User,Comments}= require("../../models")
const withAuth = require("../../utils/auth")

    router.post("/", withAuth, async (req,res)=>{
      try{
          console.log(req.body);
      const newPost= await Post.create({
           title:req.body.title,
           body:req.body.content,
         userId:req.session.userId
        })
        res.status(200).json(newPost)
      } catch(err){
          res.status(400).json(err)
      }
    })

    router.delete("/:id", withAuth, async (req,res)=>{
        try{
          const delPost= await Post.destroy({
            where:{
              id:req.params.id
            }
            
          })
          res.status(200).json(delPost)
        }catch(err){
          res.status(400).json(err)
        }
      })

module.exports = router;