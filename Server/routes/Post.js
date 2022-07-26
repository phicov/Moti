const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const RequireLogin = require('../middleware/RequireLogin')
const Post = mongoose.model("Post")


router.get('/allpost',(req,res)=>{
  Post.find()
  .populate("postedBy", "_id name")
  .then(posts=>{
    res.json({posts})
  })
  .catch(err=>{
    console.log(err)
  })
})

router.post('/createpost',RequireLogin,(req,res)=>{
  const {title, body} = req.body
  if(!title || !body){
    return res.status(422).json({error:"Please enter all values"})
  }
  req.user.password = undefined
  const post = new Post({
    title,
    body,
    postedBy:req.user
  })
  post.save().then(result=>{
    res.json({post:result})
  })
  .catch(err=>{
    console.log(err)
  })
})

router.get('/mypost', RequireLogin, (req,res)=>{
  Post.find({postedBy:req.user._id})
  .populate("PostedBy", "_id name")
  .then(mypost=>{
    res.json({mypost:mypost})
  })
  .catch(err=>{
    console.log(err)
  })
})


module.exports = router