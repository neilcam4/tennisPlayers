let express = require("express")
let router = express.Router()
let Player = require('../models/Player')
// get homepage
router.get('/', function(req,res){
    res.render("home")
})
//get list of legends
router.get('/players', function(req,res){
    Player.find({}, function(error, players){
        if(error){
            res.redirect('/players/new')
        } else {
            res.render('players')
        }
    })
})
// add new player
router.get('/players/new', function(req,res){
        res.render('new')
    })

module.exports = router;