const asyncHandler = require('express-async-handler')
//desc  Get/goals get request
//route GET/api/goals
const getFunctoin = asyncHandler(async(req,res)=>{
res.json({message:'Get from controller request'})
})
//desc  Post/goals post request
//route POST/api/goals
const PostFunctoin=asyncHandler(async(req,res)=>{
	if(!req.body.text){
		res.status(404).json({message:'idoit add the fields'})
	}
res.json({message:`Post function from controller ra babu ${req.body.text}`})
})
//desc  UPDATE/goals update request
//route PUT/api/goals
const putFunctoin= asyncHandler(async(req,res)=>{
res.json({message:`Put ra babu ${req.params.id}`})
})
//desc  delete/goals delete request
//route DELETE/api/goals
const deleteFunctoin=asyncHandler(async(req,res)=>{
res.json({message:'delete function you check it na'})
})

module.exports = {getFunctoin,PostFunctoin,putFunctoin,deleteFunctoin}