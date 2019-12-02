var express = require('express')
var User = require('../models/User')
var passport = require('passport');
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
    let newUser = new User({username:req.body.username})
    User.register(newUser, req.body.password,function(err, user){
        if(err){
            console.log(err);
            res.render("register");
        } 
        passport.authenticate("local")(req,res,function(){
            res.redirect('/players/new')
        })
    })
})
module.exports = router;