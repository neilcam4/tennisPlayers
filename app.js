let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let mongoose = require('mongoose')
let playerRoutes = require("./routes/playerRoutes")
let methodOverride = require("method-override")
let Player = require("./models/Player")
// mongoose.connect("mongodb://neilcam4:Wanaka10@ds041758.mlab.com:41758/tennis_players", function(error, db){
//     if(error){
//         console.log("error DB")
//     } else {
//         console.log("DB is connected")
//     }
// })

mongoose.connect("mongodb://localhost/tennisplayers_app", function(err, db){
    if(err){
        console.log("db is not connecting!!!")
    } else {
        console.log("DB connected")
    }
})

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