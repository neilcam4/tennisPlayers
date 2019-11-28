let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let mongoose = require('mongoose')
let playerRoutes = require("./routes/playerRoutes")
let methodOverride = require("method-override")


var port = 5000;
app.set('view engine', 'ejs');
app.use(require('express-session')({
        secret:"Wanaka is great",
        resave:false,
        saveUninitialized:false
        }))
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.use(playerRoutes)        


app.listen(port, function(err){
    if(err){
        console.log(err)
    } else {
        console.log("Server is Running!")
    }
});