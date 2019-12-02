let express = require('express')
let mongoose = require('mongoose')
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = mongoose.Schema({
    username: String,
    password: String
})

var User = mongoose.model("User", UserSchema)
UserSchema.plugin(passportLocalMongoose);
module.exports = User;