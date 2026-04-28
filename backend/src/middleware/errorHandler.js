function errorHandler(error, req, res, next) {
  if (res.headersSent) {
    return next(error)
  }

  return res.status(500).json({
    message: 'Something went wrong.',
    error: process.env.NODE_ENV === 'development' ? error.message : undefined,
  })
}

module.exports = errorHandler
