const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const port = process.env.PORT
const app = express()
const ConnectionDB = require('./config/db')

ConnectionDB()
//to get the input fields from form
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/', require('./routes/goalRoutes'))
app.use('/',require('./routes/userRoutes'))

//to start the server 
app.listen(port,()=>console.log(`server is runing on port`))