const express=require('express')
const router= express.Router()
const {Post, User,Comments}= require("../models")
const withAuth= require("../utils/auth")
//couldn't get this working, there is an error in the console about an callback function.
//need to start there. 
router.get("/", withAuth, async (req,res) => {
    try {
        const postData = await Post.findAll({
          include:[User],
          where: {
            userId: req.session.userId,
          },
        });
    
        const posts = postData.map(post => post.get({ plain: true }));
        console.log(posts)
    
        res.render('all-posts-dash', {
          layout:'dashboard', 
          posts
        });
      } catch (err) {
        res.redirect('login');
      }
});

module.exports= router;