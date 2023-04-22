const router = require('express').Router()
const postControllers = require('../controllers/postController.js')

router
	.route('/')
	.get(postControllers.getAllPosts)
	.post(postControllers.createPost)
router
	.route('/:id')
	.get(postControllers.getOnePost)
	.patch(postControllers.updatePost)
	.delete(postControllers.deletePost)

module.exports = router
