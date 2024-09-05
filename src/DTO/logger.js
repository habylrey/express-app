class Logger {
	static info(message) {
		console.log(`[INFO] ${new Date().toISOString()} - ${message}`);
	}

	static error(message) {
		console.error(`[ERROR] ${new Date().toISOString()} - ${message}`);
	}

	static debug(message) {
		console.debug(`[DEBUG] ${new Date().toISOString()} - ${message}`);
	}
}

export default Logger;
