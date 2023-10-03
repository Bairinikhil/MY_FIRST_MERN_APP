const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalsModel')
const User = require('../models/UserModel')

//desc  Get/goals get request
//route GET/api/goals
const getFunctoin = asyncHandler(async(req,res)=>{
	const goalKing = await Goal.find({user:req.user.id})
res.json(goalKing)
})
//to get a single goal from the db 
const getSingle = asyncHandler(async(req,res)=>{
	const goalKing = await Goal.findById(req.params.id)
res.json(goalKing)
})
//desc  Post/goals post request
//route POST/api/goals
const PostFunctoin=asyncHandler(async(req,res)=>{
	if(!req.body.text){
		res.status(404).json({message:'idoit add the fields'})
	}
	const goal = await Goal.create({
		text:req.body.text,
		user:req.user.id,
	})
res.json(goal)
})
//desc  UPDATE/goals update request
//route PUT/api/goals
const putFunctoin= asyncHandler(async(req,res)=>{
	const goal = await Goal.findById(req.params.id)
	if(!goal){
		res.status(400).send('not found idoits')		
	}
const user = await User.findById(req.user.id)
if(!user){
	res.status(400)
	throw new Error('User not found fool you fool!')
}
if(goal.user.toString() !== user.id){
	res.status(400)
	throw new Error('Stupid User is not authorized You theif!')
}
	const updategoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{
		new:true
	})
	
res.json(updategoal)
})
//desc  delete/goals delete request
//route DELETE/api/goals
const deleteFunctoin=asyncHandler(async(req,res)=>{
	const goal = await Goal.findById(req.params.id)
	if(!goal){
		res.status(400).send('not found idoits')		
	}
	const user = await User.findById(req.user.id)
if(!user){
	res.status(400)
	throw new Error('User not found fool you fool!')
}
if(goal.user.toString() !== user.id){
	res.status(400)
	throw new Error('Stupid User is not authorized You theif!')
}
	const deletegoal = await Goal.findByIdAndRemove(req.params.id)
res.send(`this is been deleted ${deletegoal}`)
})

module.exports = {getFunctoin,getSingle,PostFunctoin,putFunctoin,deleteFunctoin}