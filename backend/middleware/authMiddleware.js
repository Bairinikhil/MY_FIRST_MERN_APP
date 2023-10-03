const jwt = require('jsonwebtoken')

const asyncHandler = require('express-async-handler')
const User = require('../models/UserModel')

const protect = asyncHandler(async(req,res,next)=>{
	let token

	if(req.headers.authorization && 
		req.headers.authorization.startsWith('Bearer')) {
try{
token = req.headers.authorization.split(' ')[1]
const decode = jwt.verify(token,'CAT')
if(!decode){
	res.status(401)
	throw new Error(' Decode problem Not authorized');
}
req.user = await User.findById(decode.id).select('-password')
next()
}catch(error){
console.log(error)
res.status(401)
throw new Error('Not authorized')
}
}	
if(!token){
	res.json({message:'Not authorized no token'})
}
})

module.exports ={protect}