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
            res.render('players', {players:players})
        }
    })
})
// get new player page
router.get('/players/new', function(req,res){
        res.render('new')
    })

// add new player with parameters from form
router.post('/players', function(req,res){
    Player.create(req.body.players, function(error, player){
        if(error){
            res.redirect('/players/new')
        } else {
            res.redirect('/players')
        }
    })
})

module.exports = router;