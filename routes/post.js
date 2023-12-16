var express = require('express');
const { default: mongoose } = require('mongoose');
var router = express.Router();






const postSchema = new mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  title:String,
  description: String,
  image:String
  
 
 
});

const User = mongoose.model('post', postSchema);

module.exports = User;

