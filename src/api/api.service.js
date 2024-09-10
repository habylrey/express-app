import { request as undiciRequest } from 'undici';

async function request(data) {
	const url = new URL(data.baseUrl);
	for (const key in data.query) {
		url.searchParams.append(key, data.query[key].toString());
	}

	try {
		const response = await undiciRequest(url.toString(), {
			method: data.method,
			headers: {
				'Content-Type': 'application/json',
			},
			timeout: 10000,
		});

		const responseBody = await response.body.json();

		if (response.statusCode >= 400) {
			throw new Error(
				JSON.stringify({
					statusCode: response.statusCode,
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
