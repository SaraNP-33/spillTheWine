const express=require('express')
const router= express.Router()

router.get("/", async (req,res)=>{
    return await res.render('index')
})

module.exports=router;