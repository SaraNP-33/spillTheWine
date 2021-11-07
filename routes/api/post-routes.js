const express= require('express')
const router = express.Router()
const {Post, User,Comments}= require("../../models")


// get one post
router.get('/:id', async (req,res)=>{
    console.log(req.params.id, "is this coming through?")
    try{
        const onePost= Post.findByPk(
            req.params.id ,
            {
          
            include:[User]
        })
        if(onePost){
            const post =(await onePost).get({plain:true})
            console.log(post, 'does this work?')
           return res.render('onePost',{post})
        }
        else{
            res.status(404).end();
        }
       
    }catch(err){
        console.log(err)
    }
})

module.exports = router;