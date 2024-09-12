import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
	development: {
		username: 'postgres',
		password: 'Habbler2004',
		database: 'app',
		host: '127.0.0.1',
		dialect: 'postgres',
		dialectOptions: {
			bigNumberStrings: true,
		},
	},
};
