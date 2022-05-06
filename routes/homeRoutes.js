const express=require('express')
const router= express.Router()
const {Post, User,Comments}= require("../models")

//route to allow user to see all the posts
router.get('/', async (req, res)=>{
    try{
        const posts= await Post.findAll({
            include:[User]
        })

        const postData= posts.map((post)=>post.get({plain:true}))
        console.log(postData,req.session.userId,"rendering in index")
        res.render('index', {postData, userId:req.session.userId})
    } catch(err){
        console.log(err)
    }
   
});
// get one post
router.get('/post/:id', async (req,res)=>{
    console.log(req.params.id, "is this coming through?")
    try{
        const onePost= Post.findByPk(
            req.params.id ,
            {
          
            include:[{model:User, attributes:{exclude:"password"}},
                {model:Comments, include:[{model:User, attributes:{exclude:"password"}}]} ]
        })
        if(onePost){
            const post =(await onePost).get({plain:true})
            console.log(post, 'does this work?')
           return res.render('onePost',{post,  userId:req.session.userId})
        }
        else{
            res.status(404).end();
        }
       
    }catch(err){
        console.log(err)
    }
})

router.get("/login", (req, res)=>{
    if(req.session.loggedIn){
        res.redirect('/dashboard')
    }
    res.render('login')
})
router.get("/signup", (req, res)=>{
    console.log("route is being hit")
    if(req.session.loggedIn){
        res.redirect('/dashboard')
    }
    res.render('register')
})
module.exports=router;