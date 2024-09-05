import Logger from './logger.js';

const requestLogger = (req, res, next) => {
	if (!req || !res || typeof next !== 'function') {
		throw new Error(
			'Incorrect usage of middleware. Ensure that requestLogger is passed as middleware, not a function call.'
		);
	}

	const { method, url, body } = req;
	const requestId = req.headers['x-request-id'] || 'N/A';

	Logger.info(
		`Request ID: ${requestId}, Type: Incoming Request, Method: ${method}, URL: ${url}, Body: ${JSON.stringify(
			body
		)}`
	);

	const originalSend = res.send.bind(res);
	const originalJson = res.json.bind(res);

	let responseBody;
	res.send = (body) => {
		responseBody = body;
		originalSend(body);
	};
	res.json = (body) => {
		responseBody = JSON.stringify(body);
		originalJson(body);
	};

	res.on('finish', () => {
		Logger.info(
			`Request ID: ${requestId}, Type: Outgoing Response, Method: ${method}, URL: ${url}, Status Code: ${res.statusCode}, Response Body: ${responseBody}`
		);
	});

	next();
};

export default requestLogger;
