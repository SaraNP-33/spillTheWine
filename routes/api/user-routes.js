const express= require('express')
const router = express.Router()
const { User}= require("../../models")

    router.post('/', async (req, res) => {
        try {
          const newUser = await User.create({
            username: req.body.username,
            password: req.body.password,
          });
      
          req.session.save(() => {
            req.session.userId = newUser.id;
            req.session.username = newUser.username;
            req.session.loggedIn = true;
      
            res.json(newUser);
          });
        } catch (err) {
          res.status(500).json(err);
        }
      });

      router.post('/login', async (req, res) => {
        try {
          console.log("from login", req.body)
          const user = await User.findOne({
        where:{
            username: req.body.username,
                },
            
          });

          if (!user) {
            console.log("can't find user")
            res.status(400).json({ message: 'No user account found!' });
            return;
          }
      
          const validPassword = user.checkPassword(req.body.password);
      
          if (!validPassword) {
            console.log("can't validate password")
            res.status(400).json({ message: 'No user account found!' });
            return;
          }
      
          req.session.save(() => {
            req.session.userId = user.id;
            req.session.username = user.username;
            req.session.loggedIn = true;
      
            res.json(user);
            console.log(user)
          });
        } catch (err) {
          res.status(500).json(err);
        }
      });
      
      
      router.post('/logout', (req, res) => {
        if (req.session.loggedIn) {
          req.session.destroy(() => {
            res.status(204).end();
          });
        } else {
          res.status(404).end();
        }
      });
      
      module.exports = router;