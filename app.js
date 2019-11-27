let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let mongoose = require('mongoose')

var port = 5000;
app.set('view engine', 'ejs');
app.use(require('express-session')({
        secret:"Wanaka is great",
        resave:false,
        saveUninitialized:false
        }))
app.get('/', function(req,res){
    res.render("home")
})

app.listen(port, function(err){
    if(err){
        console.log(err)
    } else {
        console.log("Server is Running!")
    }
});