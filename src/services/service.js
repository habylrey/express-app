import fs from 'fs/promises';

async function readData(filePath) {
	const data = await fs.readFile(filePath, 'utf8');
	return JSON.parse(data);
}

async function writeData(filePath, data) {
	await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

async function getAll(filePath) {
	return await readData(filePath);
}

async function getById(filePath, id) {
	const items = await getAll(filePath);
	return items.find((item) => item.id === parseInt(id));
}

async function create(filePath, itemData) {
	const items = await getAll(filePath);
	const newItem = {
		id: items.length + 1,
		...itemData,
	};
	items.push(newItem);
	await writeData(filePath, items);
	return newItem;
}

async function update(filePath, id, itemData) {
	const items = await getAll(filePath);
	const index = items.findIndex((item) => item.id === parseInt(id));
	if (index === -1) return null;

	items[index] = { ...items[index], ...itemData };
	await writeData(filePath, items);
	return items[index];
}

async function remove(filePath, id) {
	const items = await getAll(filePath);
	const filteredItems = items.filter((item) => item.id !== parseInt(id));
	if (filteredItems.length === items.length) return false;

	await writeData(filePath, filteredItems);
	return true;
}

export { getAll, getById, create, update, remove };
