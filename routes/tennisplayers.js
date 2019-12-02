var express =require('express');
var router = express.Router();
var Player= require('../models/player')
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    } else {
        res.redirect('/login');
    }
}
router.get('/', function(req,res){
    Player.find({}, function(err, players){
        if(err){
            console.log(err);
        } else {
            res.render("index", {players:players});
        }
    });
});

router.get('/players', function(req,res){
    Player.find({}, function(err, players){
        if(err){
            console.log(err);
        } else {
            res.render("index", {players:players});
        }
    });
});
//new route
router.get('/players/new',isLoggedIn, function(req,res){
        res.render('new');
        });

//create
router.post('/players', function(req,res){
    Player.create(req.body.players, function(err, player){
        if(err){
            res.render('new');
        } else {
            res.redirect('/players');
        }
    });
});
//show individual
router.get('/players/:id', function(req,res){
    Player.findById(req.params.id, function(err, foundPlayer){
        if(err){
            res.redirect('/players');
        } else{
            res.render('show',{players:foundPlayer});
        }
    });
});
//edit route
router.get('/players/:id/edit', function(req,res){
    Player.findById(req.params.id, function(error,foundPlayer){
        if(error){
            res.redirect('/players');
        } else {
             res.render('edit', {players:foundPlayer});
        }
    })
});
//update route
router.put('/players/:id', function(req,res){
    Player.findByIdAndUpdate(req.params.id, req.body.players, function(err,updatedPlayer){
        if(err){
            res.redirect('/players');
        } else {
            res.redirect('/players/' + req.params.id);
        }
    });
});
//delete route
router.delete('/players/:id', function(req,res){
    Player.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect('/players');
        } else {
            res.redirect('/players');
        }
    })
});

module.exports=router;