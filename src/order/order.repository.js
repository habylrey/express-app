import dbRepository from '../repository/db.repository.js';

const getOrders = async () => {
	return dbRepository.query('SELECT * FROM "orders"');
};

const getOrderById = async (id) => {
	return dbRepository.queryOne(`SELECT * FROM "orders" WHERE id = ${id}`);
};

const createOrder = async (orderData) => {
	const { product, amount } = orderData;
	return dbRepository.queryOne(
		`INSERT INTO "orders" (product, amount) VALUES (${product}, ${amount}) RETURNING *`
	);
};

const updateOrder = async (id, orderData) => {
	const { product, amount } = orderData;
	return dbRepository.queryOne(
		`UPDATE "orders" SET product = ${product}, amount = ${amount} WHERE id = ${id} RETURNING *`
	);
};

const deleteOrder = async (id) => {
	return dbRepository.queryOne(
		`DELETE FROM "orders" WHERE id = ${id} RETURNING *`
	);
};

export default {
	getOrders,
	getOrderById,
	createOrder,
	updateOrder,
	deleteOrder,
};
