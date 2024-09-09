import models from '../common/DTO/models/model.service.js';
import { NotFoundException } from '../server/server.exceptions.js';

async function getAllOrders() {
	const orders = await models.Order.findAll();
	if (!orders || orders.length === 0) {
		throw new NotFoundException('No orders found');
	}
	return orders;
}

async function getOrderById(id) {
	const order = await models.Order.findByPk(id);
	if (!order) {
		throw new NotFoundException(`Order with id ${id} not found`);
	}
	return order;
}

async function createOrder(orderData) {
	if (!orderData.product || !orderData.amount) {
		throw new Error('Order data is incomplete');
	}
	return models.Order.create(orderData);
}

async function updateOrder(id, orderData) {
	const [rowsUpdated, [updatedOrder]] = await models.Order.update(orderData, {
		where: { id },
		returning: true,
	});
	if (rowsUpdated === 0) {
		throw new NotFoundException(`Order with id ${id} not found`);
	}
	return updatedOrder;
}

async function deleteOrder(id) {
	const rowsDeleted = await models.Order.destroy({ where: { id } });
	if (rowsDeleted === 0) {
		throw new NotFoundException(`Order with id ${id} not found`);
	}
	return rowsDeleted;
}

export default {
	getAllOrders,
	getOrderById,
	createOrder,
	updateOrder,
	deleteOrder,
};
