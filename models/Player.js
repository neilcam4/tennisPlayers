var express = require('express')
var mongoose = require("mongoose")

var playerSchema = mongoose.Schema ({
    name:String,
    age: Number,
    grandslams : Number,
    country: String
})

var Player = mongoose.model("Player", playerSchema)

module.exports = Player;