import path from 'path';
import { fileURLToPath } from 'url';
import Repository from '../repository/repository.js';
import { NotFoundException } from '../server/server.exceptions.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ordersPath = path.join(__dirname, '..', 'data', 'orders.json');

const getAllOrders = async () => {
	try {
		return await Repository.getAll(ordersPath);
	} catch (error) {
		throw new Error('Failed to fetch all orders');
	}
};

const getOrderById = async (id) => {
	try {
		const order = await Repository.getById(ordersPath, id);
		if (!order)
			throw new NotFoundException(`Order with id ${id} not found`);
		return order;
	} catch (error) {
		throw error;
	}
};

const createOrder = async (orderData) => {
	try {
		return await Repository.create(ordersPath, orderData);
	} catch (error) {
		throw new Error('Failed to create order');
	}
};

const updateOrder = async (id, orderData) => {
	try {
		const updatedOrder = await Repository.update(ordersPath, id, orderData);
		if (!updatedOrder)
			throw new NotFoundException(`Order with id ${id} not found`);
		return updatedOrder;
	} catch (error) {
		throw error;
	}
};

const deleteOrder = async (id) => {
	try {
		const result = await Repository.remove(ordersPath, id);
		if (!result)
			throw new NotFoundException(`Order with id ${id} not found`);
		return result;
	} catch (error) {
		throw error;
	}
};

const getOrdersByUserId = async (userId) => {
	try {
		const orders = await Repository.getByField(
			ordersPath,
			'user_id',
			parseInt(userId)
		);
		if (!orders || orders.length === 0)
			throw new NotFoundException(
				`Orders for user id ${userId} not found`
			);
		return orders;
	} catch (error) {
		throw error;
	}
};

export default {
	getAllOrders,
	getOrderById,
	createOrder,
	updateOrder,
	deleteOrder,
	getOrdersByUserId,
};
