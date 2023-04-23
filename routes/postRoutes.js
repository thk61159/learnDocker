const router = require('express').Router()
const postControllers = require('../controllers/postController.js')

const auth = require('../middleware/auth.js')
router
	.route('/')
	.get(postControllers.getAllPosts)
  .post(auth, postControllers.createPost)
  
router.use(auth)
router
	.route('/:id')
	.get(postControllers.getOnePost)
	.patch(auth, postControllers.updatePost)
	.delete(auth,postControllers.deletePost)

module.exports = router
