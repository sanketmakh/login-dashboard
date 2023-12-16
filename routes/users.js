var express = require('express');
var router = express.Router();
const plm=require("passport-local-mongoose");


const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/pin")


const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  contact: Number,
  ProfileImage:String,
  boards:{
    type:Array,
    default:[]
  },
  posts:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"post"
  }]
 
});
userSchema.plugin(plm);
const User = mongoose.model('User', userSchema);

module.exports = User;

