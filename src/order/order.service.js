import orderRepository from './order.repository.js';
import {
	NotFoundException,
	InternalServerErrorException,
} from '../server/server.exceptions.js';

const getAllOrders = async () => {
	const orders = await orderRepository.getOrders();
	if (!orders || orders.length === 0) {
		throw new NotFoundException();
	}
	return orders;
};

const getOrderById = async (id) => {
	const order = await orderRepository.getOrderById(id);
	if (!order) {
		throw new NotFoundException(`Order with id ${id} not found`);
	}
	return order;
};

const createOrder = async (orderData) => {
	if (!orderData.product || !orderData.amount) {
		throw new NotFoundException('Order data is incomplete');
	}
	return await orderRepository.createOrder(orderData);
};

const updateOrder = async (id, orderData) => {
	const updatedOrder = await orderRepository.updateOrder(id, orderData);
	if (!updatedOrder) {
		throw new NotFoundException(`Order with id ${id} not found`);
	}
	return updatedOrder;
};

const deleteOrder = async (id) => {
	const result = await orderRepository.deleteOrder(id);
	if (!result) {
		throw new NotFoundException(`Order with id ${id} not found`);
	}
	return result;
};

export default {
	getAllOrders,
	getOrderById,
	createOrder,
	updateOrder,
	deleteOrder,
};
