var express = require('express')
var User = require('../models/User')

let router = express.Router()
//get the login page
router.get('/login', function(req,res){
    res.render('login')
})

router.get('/register', function(req,res){
    res.render('register')
})

module.exports = router;