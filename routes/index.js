const router = require('express').Router()
const postRouter = require('./postRoutes.js')
const userRouter = require('./userRoutes.js')


router.use('/api/v1/users', userRouter)
router.use('/api/v1/posts', postRouter)

router.get('/', (req, res) => {
	res.send('hi tset docker compose test  ')
})

module.exports = router