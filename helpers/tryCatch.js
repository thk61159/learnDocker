exports.tryCatch = controller => async (req, res, next) => {
  try {
    await controller(req,res)
  } catch (error) {
    console.log(error)
    res.status(400).json({
			status: 'fail',
		})

    // next(error)
  }
}