const Post = require('../models/postModel.js')
const {tryCatch} = require('../helpers/tryCatch.js')
module.exports = {
	getAllPosts: tryCatch(async (req, res) => {
		const posts = await Post.find()
		res.status(200).json({
			status: 'success',
			data: { posts },
		})
	}),
	getOnePost: tryCatch(async (req, res) => {
		const post = await Post.findById(req.params.id)
		res.status(200).json({
			status: 'success',
			data: { post },
		})
	}),
  createPost: tryCatch(async (req, res) => {
    console.log(req.body)
		const post = await Post.create(req.body)
		res.status(200).json({
			status: 'success',
			data: { post },
		})
	}),
	updatePost: tryCatch(async (req, res) => {
		const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		})
		res.status(200).json({
			status: 'success',
			data: { post },
		})
	}),
	deletePost: tryCatch(async (req, res) => {
		const post = await Post.findByIdAndDelete(req.params.id)
		res.status(200).json({
			status: 'success',
		})
	}),
}