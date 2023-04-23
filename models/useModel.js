const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, 'user required username'],
		unique: true,
	},
	password: {
		type: String,
		required: [true, 'user required password'],
	},
})

module.exports = mongoose.model('User', userSchema)
