import fs from 'fs/promises';

class Repository {
	static async readData(filePath) {
		const data = await fs.readFile(filePath, 'utf8');
		return JSON.parse(data);
	}

	static async writeData(filePath, data) {
		await fs.writeFile(filePath, JSON.stringify(data, null, 2));
	}

	static async getAll(filePath) {
		return await this.readData(filePath);
	}

	static async getById(filePath, id) {
		const items = await this.getAll(filePath);
		return items.find((item) => item.id === parseInt(id));
	}

	static async create(filePath, itemData) {
		const items = await this.getAll(filePath);
		const newItem = {
			id: items.length + 1,
			...itemData,
		};
		items.push(newItem);
		await this.writeData(filePath, items);
		return newItem;
	}

	static async update(filePath, id, itemData) {
		const items = await this.getAll(filePath);
		const index = items.findIndex((item) => item.id === parseInt(id));
		if (index === -1) return null;

		items[index] = { ...items[index], ...itemData };
		await this.writeData(filePath, items);
		return items[index];
	}

	static async remove(filePath, id) {
		const items = await this.getAll(filePath);
		const filteredItems = items.filter((item) => item.id !== parseInt(id));
		if (filteredItems.length === items.length) return false;

		await this.writeData(filePath, filteredItems);
		return true;
	}
	static async getByField(filePath, fieldName, fieldValue) {
		const items = await this.getAll(filePath);
		return items.filter((item) => item[fieldName] === fieldValue);
	}
}
export default Repository;
