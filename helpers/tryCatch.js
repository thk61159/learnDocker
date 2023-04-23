exports.tryCatch = controller => async (req, res, next) => {
  try {
    await controller(req,res,next)
  } catch (error) {
    console.log(error.message,'==============')
    res.status(400).json({
			status: 'fail',
			message: error._message || error.message || null,
		})

    // next(error)
  }
}