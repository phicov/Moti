const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 3001
const { MONGOURI } = require('./Keys')

mongoose.connect(MONGOURI)
mongoose.connection.on('connected', () =>{
  console.log('connected to mongo')
})
mongoose.connection.on('error', (err) =>{
  console.log("err", err)
})

app.get('/',(req,res)=>{
  res.send("Hello world")
})

app.listen(PORT, () => {
  console.log('Server Running on', PORT)
})