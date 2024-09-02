import path from 'path';
import { fileURLToPath } from 'url';
import Repository from '../repository/repository.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ordersPath = path.join(__dirname, '..', 'data', 'orders.json');

const getAllOrders = () => Repository.getAll(ordersPath);
const getOrderById = (id) => Repository.getById(ordersPath, id);
const createOrder = (orderData) => Repository.create(ordersPath, orderData);
const updateOrder = (id, orderData) =>
	Repository.update(ordersPath, id, orderData);
const deleteOrder = (id) => Repository.remove(ordersPath, id);

export default {
	getAllOrders,
	getOrderById,
	createOrder,
	updateOrder,
	deleteOrder,
};
