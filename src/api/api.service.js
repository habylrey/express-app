import fetch from 'node-fetch';
import requestLogger from '../common/logger.middleware.js';

async function request(data) {
	const url = new URL(data.baseUrl);
	for (const key in data.query) {
		url.searchParams.append(key, data.query[key].toString());
	}

	const requestId = Date.now();

	// requestLogger.info({
	//     requestId,
	//     type: 'outgoing request',
	//     method: data.method,
	//     url: url.toString(),
	//     body: data.body,
	// });

	try {
		const response = await fetch(url, {
			method: data.method,
			headers: {
				'Content-Type': 'application/json',
			},
			timeout: 10000,
		});

		const responseBody = await response.json();

		// requestLogger.info({
		//     requestId,
		//     type: 'outgoing request response',
		//     response: {
		//         status: response.status,
		//         body: responseBody,
		//     },
		// });

		if (!response.ok) {
			throw new Error(
				JSON.stringify({
					statusCode: response.status,
					body: responseBody,
				})
			);
		}

		return responseBody;
	} catch (error) {
		// requestLogger.error({
		//     requestId,
		//     type: 'request error',
		//     error: error.message,
		// });
		throw error;
	}
}

export default request;
