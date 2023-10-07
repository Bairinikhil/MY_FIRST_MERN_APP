const path = require('path')
const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const port = process.env.PORT
const app = express()
const cors = require('cors')
const ConnectionDB = require('./config/db')


ConnectionDB()
//to get the input fields from form
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const corsOptions = {
  origin: "https://my-first-mern-app.vercel.app",
  ethods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
  credentials: true,
   optionsSuccessStatus: 200, // Some legacy browsers (IE11) may not send 204
 headers: "*"
};

app.use(cors(corsOptions));

app.use('/', require('./routes/goalRoutes'))
app.use('/api/users',require('./routes/userRoutes'))

//deploying fornend to server
if(process.env.NODE_ENV==='production'){
	app.use(express.static(path.join(__dirname,'../frontend/build')))

	app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'../','frontend','build','index.html')))
}else{
	app.get('/',(req,res)=>res.send('please set to productio thiis development'))
}

//to start the server 
app.listen(port,()=>console.log(`server is runing on port`))