let express = require('express')
let mongoose = require('mongoose')

var userSchema = mongoose.Schema({
    username: String,
    email: String
})

var User = mongoose.model("User", userSchema)

module.exports = User;