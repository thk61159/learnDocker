const cors = require('cors')
const express = require('express')
const session = require('express-session')
const RedisStore = require('connect-redis').default


const { SESSION_SECRET } = require('./config/config.js')
const redisClient = require('./config/redisConnect.js')
const routes = require('./routes')
require('./config/mongoConnect.js')

const app = express()
app.use(cors())
app.enable("trust proxy")
app.use(
	session({
		store: new RedisStore({ client: redisClient }),
		secret: SESSION_SECRET || 'secret',
		cookie: {
			secure: false,
			httpOnly: true,
			maxAge: 300000,
		},
		resave: false,
		saveUninitialized: false,
	})
)
app.use(express.json())
app.use(routes)

const PORT = process.env.PORT || 3000
app.listen(PORT, (req, res) => {
	console.log(`listening on port ${PORT}`)
})
