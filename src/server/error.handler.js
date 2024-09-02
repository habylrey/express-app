export function errorHandlerMiddleware(err, req, res, next) {
	console.error({
		date: new Date(),
		error: err.message,
		stack: err.stack,
	});

	if (res.headersSent) {
		return next(err);
	}

	if (err.statusCode) {
		return res.status(err.statusCode).json({
			status: err.statusCode,
			message: err.message,
		});
	}

	return res.status(500).json({
		status: 500,
		message: 'Internal Server Error',
	});
}
