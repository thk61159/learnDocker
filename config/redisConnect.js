const redis = require('redis')
const { REDIS_URL, REDIS_PORT } = require('./config.js')

let redisClient = redis.createClient({
	url: `redis://${REDIS_URL}:${REDIS_PORT}`,
})
redisClient
	.connect()
	.then((e) => console.log('connect to Redis successfully',e))
	.catch(err => console.log(err))
// redisClient.on('connect', () => console.log('Redis client connected'))
// redisClient.on('error', err => console.error('Redis error: ', err))
module.exports = redisClient