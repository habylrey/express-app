export function errorHandlerMiddleware(err, req, res, next) {
	console.log({
		date: new Date(),
		error: err.message,
	});

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
