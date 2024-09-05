import models from '../DTO/models/model.service.js';
import { NotFoundException } from '../server/server.exceptions.js';

const getAllOrders = async () => {
	const orders = await models.Order.findAll();
	if (!orders || orders.length === 0) {
		throw new NotFoundException();
	}
	return orders;
};

const getOrderById = async (id) => {
	const order = await models.Order.findByPk(id);
	if (!order) {
		throw new NotFoundException(`Order with id ${id} not found`);
	}
	return order;
};

const createOrder = async (orderData) => {
	if (!orderData.product || !orderData.amount) {
		throw new NotFoundException('Order data is incomplete');
	}
	return models.Order.create(orderData);
};

const updateOrder = async (id, orderData) => {
	const [rowsUpdated, [updatedOrder]] = await models.Order.update(orderData, {
		where: { id },
		returning: true,
	});
	if (rowsUpdated === 0) {
		throw new NotFoundException(`Order with id ${id} not found`);
	}
	return updatedOrder;
};

const deleteOrder = async (id) => {
	const rowsDeleted = await models.Order.destroy({ where: { id } });
	if (rowsDeleted === 0) {
		throw new NotFoundException(`Order with id ${id} not found`);
	}
	return rowsDeleted;
};

export default {
	getAllOrders,
	getOrderById,
	createOrder,
	updateOrder,
	deleteOrder,
};
