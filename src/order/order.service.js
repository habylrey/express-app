import orderRepository from './order.repository.js';
import {
	NotFoundException,
	InternalServerErrorException,
} from '../server/server.exceptions.js';

const getAllOrders = async () => {
	try {
		const orders = await orderRepository.getOrders();
		if (!orders || orders.length === 0) {
			throw new NotFoundException('No orders found');
		}
		return orders;
	} catch (error) {
		throw new InternalServerErrorException(
			`Failed to fetch orders: ${error.message}`
		);
	}
};

const getOrderById = async (id) => {
	try {
		const order = await orderRepository.getOrderById(id);
		if (!order) {
			throw new NotFoundException(`Order with id ${id} not found`);
		}
		return order;
	} catch (error) {
		throw new InternalServerErrorException(
			`Failed to fetch order by id: ${error.message}`
		);
	}
};

const createOrder = async (orderData) => {
	if (!orderData.product || !orderData.amount) {
		throw new Error('Order data is incomplete');
	}
	try {
		return await orderRepository.createOrder(orderData);
	} catch (error) {
		throw new InternalServerErrorException(
			`Failed to create order: ${error.message}`
		);
	}
};

const updateOrder = async (id, orderData) => {
	try {
		const updatedOrder = await orderRepository.updateOrder(id, orderData);
		if (!updatedOrder) {
			throw new NotFoundException(`Order with id ${id} not found`);
		}
		return updatedOrder;
	} catch (error) {
		throw new InternalServerErrorException(
			`Failed to update order: ${error.message}`
		);
	}
};

const deleteOrder = async (id) => {
	try {
		const result = await orderRepository.deleteOrder(id);
		if (!result) {
			throw new NotFoundException(`Order with id ${id} not found`);
		}
		return result;
	} catch (error) {
		throw new InternalServerErrorException(
			`Failed to delete order: ${error.message}`
		);
	}
};

export default {
	getAllOrders,
	getOrderById,
	createOrder,
	updateOrder,
	deleteOrder,
};
