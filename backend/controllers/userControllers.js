const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/UserModel')

// user registaration function request bro

const registerUser=asyncHandler(async(req,res)=>{
	const {name,email,password} = req.body
	if(!name || !email ||!password){
		res.send('You jackass input the fields Ya')
	}
	const userExists = await User.findOne({email})
	if(userExists){
		res.status(400).json({message:"This user alread exists idoit"})
	}
	const salt = await bcrypt.genSalt(10)
	const hashPass = await bcrypt.hash(password, salt)
	const user = await User.create({
		name,
		email,
		password:hashPass
	})
	if(user){
		res.status(200).json({
			_id:user.id,
			name:user.name,
			email:user.email,
			password:user.password,
			token:generateToken(user._id)
		})
	}else{
		res.status(404)
		throw new Error('Imvalid user jackass stupid idoit')
	}

})

///User login function
const loginUser= asyncHandler(async(req,res)=>{
	const {email, password} = req.body
	const user = await User.findOne({email})
	if(user && (await bcrypt.compare(password, user.password))){
		res.json({
			_id:user.id,
			name:user.name,
			email:user.email,
			password:user.password,
			token:generateToken(user._id)
		})
	}else{
	res.status(404)
		throw new Error('Invalid credntials you stupid !')	
	}
res.status(200).json({message:'login User'})
})
//requesting User data
const getUser = asyncHandler(async(req,res)=>{
	const {_id, name, email} = await User.findById(req.user.id)
	res.status(200).json({
		id: _id,
		name,
		email
	})

})
const generateToken = (id)=>{
 return jwt.sign({ id },'CAT',{
	expiresIn:'50d',
 })

}
module.exports ={registerUser,loginUser,getUser}