const mongoose = require('mongoose')

async function ConnectionDB(){

	try {
		const conn = await mongoose.connect(process.env.MONGO_URI)
		console.log(`MongoDB is connceted`.blue.underline)
	} catch (err) {
	console.log(err)
	process.exit(1)	
	}
}
module.exports = ConnectionDB