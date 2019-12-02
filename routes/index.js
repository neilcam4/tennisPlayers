var express =require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user')


router.get('/quiz', function(req,res){
    res.render("quiz");
});
router.get('/profile', function(req,res){
    User.find({}, function(err, users){
        if(err){
            console.log(err);
        } else {
            res.render('profile',{users:users})
        }
    })  
});
//AUTH ROUTES
router.get('/register', function(req,res){
    res.render("register");
});
//handling user sign up
router.post('/register', function(req,res){
    User.register(new User({username:req.body.username}), req.body.password,function(err, user){
        if(err){
            console.log(err);
            res.render("register");
        } 
        passport.authenticate("local")(req,res,function(){
            res.redirect('/players')
        })
    })
})
//login form
router.get('/login', function(req,res){
    res.render("login");
});
//login route logic
router.post('/login', passport.authenticate("local",{            successRedirect:'/players/new',
 failureRedirect:'/login'
}),function(req,res){
    
});
//logout routes
router.get('/logout', function(req,res){
    req.logout();
    res.redirect('/players');
});

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    } else {
        res.redirect('/login');
    }
}
module.exports=router;