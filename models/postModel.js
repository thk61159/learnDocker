const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'post required title'],
	},
	body: {
		type: String,
		required: [true, 'post required body'],
	},
})

module.exports = mongoose.model('Post', postSchema)