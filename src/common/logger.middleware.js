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
		JSON.stringify({
			request_id: requestId,
			type: 'Incoming request',
			method: method,
			URL: url,
			Body: body,
		})
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
			JSON.stringify({
				request_id: requestId,
				type: 'Incoming request',
				Status_code: res.statusCode,
				method: method,
				URL: url,
				Response_Body: body,
			})
		);
	});

	next();
};

export default requestLogger;
