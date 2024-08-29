import fs from 'fs/promises';
import path from 'path';
import Services from '../services/services.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFilePath = path.resolve(__dirname, '../../data/data.json');

class PostController {
	async getAll(req, res) {
		try {
			console.log(req.query);
			await Services.readData(res);
		} catch (error) {
			console.error(error);
			res.json({ message: 'failed to get' });
		}
	}
	async update(req, res) {
		try {
			const fileData = await fs.readFile(dataFilePath, 'utf-8');
			const data = JSON.parse(fileData);
			const {
				id,
				buyer_name,
				product_name,
				product_rub_price,
				purchased_at,
			} = req.body;
			if (id === undefined || id < 0) {
				return res.status(400).json({ message: 'Invalid ID' });
			}
			const newData = data.filter((item) => item.id !== id);
			newData.push({
				id,
				buyer_name,
				product_name,
				product_rub_price,
				purchased_at,
			});
			await Services.writeData(newData);
			const addedItem = newData.find((item) => item.id === id);
			res.json({
				item: addedItem,
			});
		} catch (error) {
			console.error(error);
			res.json({ message: 'failed to create' });
		}
	}

	async create(req, res) {
		try {
			const fileData = await fs.readFile(dataFilePath, 'utf8');
			const data = JSON.parse(fileData);
			const {
				id,
				buyer_name,
				product_name,
				product_rub_price,
				purchased_at,
			} = req.body;
			const newEntry = {
				id,
				buyer_name,
				product_name,
				product_rub_price,
				purchased_at,
			};
			data.push(newEntry);
			await Services.writeData(data);
			res.json({
				message: 'success',
			});
		} catch (error) {
			console.error(error);
			res.json({ message: 'failed to delete' });
		}
	}
	async delete(req, res) {
		console.log(req.query);
		try {
			const { id } = req.query;
			if (!id) {
				return res.status(400).json({ message: 'id not found' });
			}
			const data = await Services.readData();
			const index = data.findIndex((item) => item.id === id);
			if (index === -1) {
				return res.status(404).json({ message: 'not found' });
			}
			data.splice(index, 1);
			await Services.writeData(data);
			res.status(200).json({ message: 'success' });
		} catch (error) {
			res.json({ message: 'failed to delete' });
		}
	}
}

export default new PostController();
