import fetch from 'node-fetch';

async function request(data) {
	const url = new URL(data.baseUrl);
	for (const key in data.query) {
		url.searchParams.append(key, data.query[key].toString());
	}

	const requestId = Date.now();

	try {
		const response = await fetch(url, {
			method: data.method,
			headers: {
				'Content-Type': 'application/json',
			},
			timeout: 10000,
		});

		const responseBody = await response.json();

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
		throw error;
	}
}

export default request;
