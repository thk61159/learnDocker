const mongoose = require('mongoose')
const { MONGO_URL } = require('./config.js')
const connectWithRetry = () => {
	mongoose
		.connect(MONGO_URL)
		.then(() => console.log('connect to MongoDB successfully'))
		.catch(e => {
			console.log(e)
			setTimeout(connectWithRetry, 5000)
		})
}
module.exports = connectWithRetry()