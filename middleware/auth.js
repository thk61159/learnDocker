const {tryCatch} = require('../helpers/tryCatch.js')
const auth = tryCatch((req, res, next) => {
  const { user } = req.session
  if (!user) throw new Error('401 unauthorized')
  req.user = user
  return next()
})

module.exports = auth