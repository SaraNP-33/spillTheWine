const express=require('express')
const router= express.Router()
const {Post, User,Comments}= require("../models")

//route to allow user to see all the posts
router.get('/', async (req, res)=>{
    try{
        const posts= Post.findAll({
            include:[User]
        })

        const postData= (await posts).map((post)=>post.get({plain:true}))
        // console.log(postData)
        res.render('index', {postData})
    } catch(err){
        console.log(err)
    }
   
});

router.get("/login", (req, res)=>{
    if(req.session.loggedIn){
        res.redirect('/')
    }
    res.render('login')
})
router.get("/signup", (req, res)=>{
    if(req.session.loggedIn){
        res.redirect('/')
    }
    res.render('signup')
})
module.exports=router;