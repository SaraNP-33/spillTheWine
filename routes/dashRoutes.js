const express=require('express')
const router= express.Router()
const {Post, User,Comments}= require("../models");
const withAuth= require("../utils/auth")


router.get("/", withAuth, async (req,res) => {
    try {
        const postData = await Post.findAll({
          include:[User],
          where: {
            userId: req.session.userId,
          },
        });
    
        const posts = postData.map(post => post.get({ plain: true }));
      
    
        res.render('all-posts-dash', {
          layout:'dashboard', 
          posts
        });
      } catch (err) {
        res.redirect('login');
      }
     
});

// get one post
//endpoit /dashboard/post/:id
router.get('/post/:id',withAuth, async (req,res)=>{
  console.log(req.params.id, "is this coming through?")
  try{
      const onePost= Post.findByPk(
          req.params.id ,
          {
        
          include:[User]
      })
      if(onePost){
          const post =(await onePost).get({plain:true})
          // console.log(post, 'does this work?')
         return res.render('onePostDash',{layout:'dashboard', post})
      }
      else{
          res.status(404).end();
      }
     
  }catch(err){
      console.log(err)
  }
})
router.get("/user", withAuth, async(req, res)=>{
  try{
  const user= await User.findByPk({
    where:{
      userId:req.session.userId
    }
  })
  const username= user.get({plain:true})
  console.log(username, "am I getting anything?");
  res.json(username)
  
} catch(err){
  console.log(err)
}
})

module.exports= router;