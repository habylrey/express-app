import path from 'path';
import { fileURLToPath } from 'url';
import * as service from '../services/service.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ordersPath = path.join(__dirname, '..', 'data', 'orders.json');

const getAllOrders = () => service.getAll(ordersPath);
const getOrderById = (id) => service.getById(ordersPath, id);
const createOrder = (orderData) => service.create(ordersPath, orderData);
const updateOrder = (id, orderData) =>
	service.update(ordersPath, id, orderData);
const deleteOrder = (id) => service.remove(ordersPath, id);

export default {
	getAllOrders,
	getOrderById,
	createOrder,
	updateOrder,
	deleteOrder,
};
