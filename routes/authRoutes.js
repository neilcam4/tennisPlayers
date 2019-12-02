var express = require('express')
var User = require('../models/User')

let router = express.Router()
//get the login page
router.get('/login', function(req,res){
    res.render('login')
})
//get the register page
router.get('/register', function(req,res){
    res.render('register')
})
// register as a user post parameters
router.post('/register', function(req,res){
    User.create(new User({username:req.body.username}), req.body.password,function(error, user){
        if(error){
            console.log("not creating users");
            res.render("register");
        } 
        passport.authenticate("local")(req,res,function(){
            res.redirect('/players/new')
        })
    })
})
module.exports = router;