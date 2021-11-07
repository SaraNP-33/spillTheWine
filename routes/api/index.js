const express= require('express')
const router = express.Router()
const postRoutes= require('./post-routes')

router.use('/post', postRoutes);

module.exports = router;