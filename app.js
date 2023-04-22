const express = require('express')
const mongoose = require('mongoose')
const { MONGO_URL } = require('./config/config.js')
const postsRouter = require('./routes/postRoutes.js')
const app = express()
app.use(express.json())
const connectWithRetry = () => {
  mongoose
		.connect(MONGO_URL)
		.then(() => console.log('connect to DB successfully'))
    .catch(e => {
      console.log(e)
      setTimeout(connectWithRetry,5000)
    })
}
connectWithRetry()

app.get('/', (req, res) => {
	res.send('hi tset docker compose test  ')
})
app.use('/api/v1/posts', postsRouter)
const PORT = process.env.PORT || 3000

app.listen(PORT, (req, res) => {
	console.log(`listening on port ${PORT}`)
})
