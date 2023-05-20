// import express
const express = require('express')

// import router
const router= require('./routes/router')

// import cors
const cors = require('cors')

// import dotenv
require('dotenv').config()

// import jwt middleware
const jwt = require('jsonwebtoken')

// creating a server app
const server = express()

// import connection file
require('./db/connection')

// variable to hold port number because it is dynamic
const port = 3000 || process.env.PORT




// run server
server.listen(port,()=>{
    console.log(`server started working at port number: ${port}`);
})

// use server app and routes
server.use(cors())
server.use(express.json())
server.use(router)

// route
server.get('/',(req,res)=>{
    res.status(200).json('vehicle server started working')
})