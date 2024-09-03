import dbRepository from '../repository/db.repository.js';

const getOrders = async () => {
	return dbRepository.query('SELECT * FROM "orders"');
};

const getOrderById = async (id) => {
	return dbRepository.queryOne('SELECT * FROM "orders" WHERE id = $1', [id]);
};

const createOrder = async (orderData) => {
	const { product, amount } = orderData;
	return dbRepository.queryOne(
		`INSERT INTO "orders" (product, amount) VALUES ($1, $2) RETURNING *`,
		[product, amount]
	);
};

const updateOrder = async (id, orderData) => {
	const { product, amount } = orderData;
	return dbRepository.queryOne(
		`UPDATE "orders" SET product = $1, amount = $2 WHERE id = $3 RETURNING *`,
		[product, amount, id]
	);
};

const deleteOrder = async (id) => {
	return dbRepository.queryOne(
		`DELETE FROM "orders" WHERE id = $1 RETURNING *`,
		[id]
	);
};

export default {
	getOrders,
	getOrderById,
	createOrder,
	updateOrder,
	deleteOrder,
};
