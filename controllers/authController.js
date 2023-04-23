const bcrypt = require('bcryptjs')
const User = require('../models/useModel.js')
const {tryCatch} = require('../helpers/tryCatch.js')
module.exports = {
	signUp: tryCatch(async (req, res) => {
		const { username, password } = req.body
		const hashPassword = await bcrypt.hash(password, 10)
		const newUser = await User.create({
			username,
			password: hashPassword,
    })
    req.session.user = newUser
		res.status(201).json({
			status: 'success',
			data: { newUser },
		})
	}),
	signIn: tryCatch(async (req, res) => {
    const { username, password } = req.body
    const user = await User.findOne({ username })
    if (!user) throw new Error('404 not found' )
    const checkPassword = await bcrypt.compare(password, user.password)
    if (!checkPassword) throw new Error('400 password incorrect')
    req.session.user = user
		res.status(201).json({
			status: 'success',
			data: { user },
		})
	}),
}