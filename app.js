let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let mongoose = require('mongoose')
let playerRoutes = require("./routes/playerRoutes")
let authRoutes = require('./routes/authRoutes')
let methodOverride = require("method-override")
let Player = require("./models/Player");
let passport = require('passport');
var LocalStrategy=require('passport-local');
var passportlocalMongoose = require('passport-local-mongoose');
var User = require('./models/User')
app.use(authRoutes);
app.use(playerRoutes);
mongoose.connect("mongodb://localhost/tennisplayers_app", function(err, db){
    if(err){
        console.log("db is not connecting!!!")
    } else {
        console.log("DB connected")
    }
})

// var LegendSchema = mongoose.Schema({
//     name: String,
//     legend:String
// })

// var Legend = mongoose.model("Legend", LegendSchema)
// var roger = new Legend({
//     name:"Roger Federer",
//     legend: "Greatest of All time"
// })
//  roger.save(function(error, player){
//      if(error){
//          console.log("player could not be saved")
//      } else {
//         console.log("Player saved : " + player)
//      }
//  })

var port = 3000;
app.set('view engine', 'ejs');
//passport configuration
app.use(require('express-session')({
        secret:"Wanaka is great",
        resave:false,
        saveUninitialized:false
        }))
        app.use(passport.initialize());
        app.use(passport.session());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(methodOverride("_method"));
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());    
app.use(express.static("public"));
app.use(methodOverride("_method"));

      
app.listen(port, function(err){
    if(err){
        console.log(err)
    } else {
        console.log("Server is Running!")
    }
});

// var express = require('express');
// var app = express();
// var mongoose = require('mongoose');
// var port=3000;
// var bodyParser = require('body-parser');
// var methodOverride = require('method-override');
// var passport = require('passport');
// var LocalStrategy=require('passport-local');
// var passportlocalMongoose = require('passport-local-mongoose');
// var User = require('./models/user');
// var Player = require('./models/player')
// var authRoutes = require('./routes/authRoutes');
// var playerRoutes=require('./routes/tennisplayers')

// mongoose.connect("mongodb://localhost/tennisplayers_app", function(error, db){
//     if(error){
//         console.log(" database error")
//     } else {
//         console.log("Local Database connected")
//     }
// });
// app.set('view engine', 'ejs');
// app.use(require('express-session')({
//         secret:"Wanaka is great",
//         resave:false,
//         saveUninitialized:false
//         }))
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());    
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static("public"));
// app.use(methodOverride("_method"));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(authRoutes);
// app.use(playerRoutes);

// app.listen(port, function(err){
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Server is running");
//     }
// });
