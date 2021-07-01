const express=require('express')
const router= express.Router()
const {Post, User}= require("../models")

// router.get("/", async (req,res)=>{
//     return await res.render('index')
// });

router.get('/', async (req, res)=>{
    try{
        const posts= Post.findAll({
            include:[User]
        })

        const postData= (await posts).map((post)=>post.get({plain:true}))
        console.log(postData)
        res.render('index', {postData})
    } catch(err){
        console.log(err)
    }
   
});

module.exports=router;