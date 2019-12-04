require('dotenv').config();
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port=5000;
var bodyParser = require('body-parser');
var methodOverride=require('method-override');
var passport=require('passport');
var LocalStrategy=require('passport-local');
var passportlocalMongoose = require('passport-local-mongoose');
var User = require('./models/user');
var Player = require('./models/player')
var authRoutes = require('./routes/index');
var playerRoutes=require('./routes/tennisplayers')
let MONGODB_KEY = process.env.MONGODB_KEY
mongoose.connect(MONGODB_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('DB Connected!'))
.catch(err => {
    console.log("DB Connection Error");
});
// mongoose.connect("mongodb://Admin:bokky11@ds041758.mlab.com:41758/tennis_players", function(error, db){
//     if(error){
//         console.log("database problem")
//     } else {
//         console.log("MLAB DB is running")
//     }
// })
app.set('view engine', 'ejs');
app.use(require('express-session')({
        secret:"Wanaka is great",
        resave:false,
        saveUninitialized:false
        }))
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());    
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(passport.initialize());
app.use(passport.session());
app.use(authRoutes);
app.use(playerRoutes);


//Schema
app.listen(port, function(err){
    if(err){
        console.log(err);
    } else {
        console.log("Server is running, listening on port " + port);
    }
});