import { Router } from 'express';
import OrderService from './order.service.js';
import {
	InternalServerErrorException,
	NotFoundException,
} from '../server/server.exceptions.js';

const router = Router();

class OrderController {
	async getAllOrders(req, res, next) {
		try {
			const orders = await OrderService.getAllOrders();
			res.json(orders);
		} catch (err) {
			next(new InternalServerErrorException('Failed to get order info'));
		}
	}

	async getOrderById(req, res, next) {
		try {
			const order = await OrderService.getOrdersByUserId(req.params.id);
			if (!order) throw new NotFoundException('Resource not found');
			res.json(order);
		} catch (err) {
			next(new InternalServerErrorException('Failed to get order info'));
		}
	}

	async createOrder(req, res, next) {
		try {
			const newOrder = await OrderService.createOrder(req.body);
			res.status(201).json(newOrder);
		} catch (err) {
			next(new InternalServerErrorException('Failed to create order'));
		}
	}

	async updateOrder(req, res, next) {
		try {
			const updatedOrder = await OrderService.updateOrder(
				req.params.id,
				req.body
			);
			if (!updatedOrder)
				throw new NotFoundException('Resource not found');
			res.json(updatedOrder);
		} catch (err) {
			next(new InternalServerErrorException('Failed to update order'));
		}
	}

	async deleteOrder(req, res, next) {
		try {
			const result = await OrderService.deleteOrder(req.params.id);
			if (!result) throw new NotFoundException('Resource not found');
			res.status(204).end();
		} catch (err) {
			next(new InternalServerErrorException('Failed to delete order'));
		}
	}
}

const orderController = new OrderController();

router.get('/', orderController.getAllOrders);
router.get('/:id', orderController.getOrderById);
router.post('/', orderController.createOrder);
router.put('/:id', orderController.updateOrder);
router.delete('/:id', orderController.deleteOrder);

export default router;
