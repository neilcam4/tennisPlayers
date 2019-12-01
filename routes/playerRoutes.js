let express = require("express")
let router = express.Router()
let Player = require('../models/Player')
// get homepage
router.get('/', function(req,res){
    Player.find({}, function(error, players){
        if(error){
            res.redirect('/players/new')
        } else {
            res.render('players', {players:players})
        }
    })
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

// show specific player
router.get('/players/:id', function(req,res){
    Player.findById(req.params.id, function(error, foundPlayer){
        if(error){
            res.redirect('/players')
        } else {
            res.render('show', {players:foundPlayer})
        }
    })
})

//get route edit player page
router.get('/players/:id/edit', function(req,res){
    Player.findById(req.params.id, function(error, player){
        if(error){
            res.redirect('/players')
        } else {
            res.render('edit', {players:player})
        }
    })
})

//update player with new params 
router.put('/players/:id', function(req,res){
    Player.findByIdAndUpdate(req.params.id, req.body.players, function(err,updatedPlayer){
        if(err){
            res.redirect('/players');
        } else {
            res.redirect('/players/' + req.params.id);
        }
    });
});


module.exports = router;