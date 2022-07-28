const mongoose = require('mongoose')
const { post } = require('../routes/Auth')
const {ObjectId} = mongoose.Schema.Types
const postSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  body:{
    type:String,
    required:true
  },
  photo:{
    type:String,
    default:"no photo"
  },
  postedBy:{
    type:ObjectId,
    ref:"User"
  }
})

mongoose.model("Post", postSchema)