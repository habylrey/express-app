import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFilePath = path.resolve(__dirname, '../../data/data.json');
class Services {
	async readData(res) {
		const data = await fs.readFile(dataFilePath, 'utf-8');
		res.json(JSON.parse(data));
	}
	async writeData(data) {
		await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));
	}
}
export default new Services();
