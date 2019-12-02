var express=require('express');

var mongoose=require('mongoose');

var tennisSchema = mongoose.Schema({
    name:String,
    age:Number,
    titles:Number,
    nationality:String
});

var Player = mongoose.model("Player", tennisSchema);

module.exports=mongoose.model("Player", tennisSchema);