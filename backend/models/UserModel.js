const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
	name:{
		type:String,
		require:[true,'Please we need name input']
	},
	email:{
		type:String,
		require:[true,'Please we need email input']
	},
	password:{
		type:String,
		require:[true,'Please we need password input']
	},
},{
	timestamps:true,
})
module.exports = mongoose.model('User',UserSchema)