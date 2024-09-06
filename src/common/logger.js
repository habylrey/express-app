class Logger {
	static info(message) {
		console.log(
			JSON.stringify({ INFO: new Date().toISOString(), message: message })
		);
	}

	static error(message) {
		JSON.stringify({ ERROR: new Date().toISOString(), message: message });
	}
}

export default Logger;
