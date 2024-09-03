import { Router } from 'express';
import OrderService from './order.service.js';
import { NotFoundException } from '../server/server.exceptions.js';

function createOrderRouter() {
	const router = Router();

	const getAllOrders = async (req, res, next) => {
		try {
			const orders = await OrderService.getAllOrders();
			res.json(orders);
		} catch (err) {
			next(err);
		}
	};

	const getOrderById = async (req, res, next) => {
		try {
			const order = await OrderService.getOrdersByUserId(req.params.id);
			if (!order) throw new NotFoundException('Resource not found');
			res.json(order);
		} catch (err) {
			next(err);
		}
	};

	const createOrder = async (req, res, next) => {
		try {
			const newOrder = await OrderService.createOrder(req.body);
			res.status(201).json(newOrder);
		} catch (err) {
			next(err);
		}
	};

	const updateOrder = async (req, res, next) => {
		try {
			const updatedOrder = await OrderService.updateOrder(
				req.params.id,
				req.body
			);
			if (!updatedOrder)
				throw new NotFoundException('Resource not found');
			res.json(updatedOrder);
		} catch (err) {
			next(err);
		}
	};

	const deleteOrder = async (req, res, next) => {
		try {
			const result = await OrderService.deleteOrder(req.params.id);
			if (!result) throw new NotFoundException('Resource not found');
			res.status(204).end();
		} catch (err) {
			next(err);
		}
	};

	return router
		.get('/all', getAllOrders)
		.get('/:id', getOrderById)
		.post('/', createOrder)
		.put('/:id', updateOrder)
		.delete('/:id', deleteOrder);
}

export default createOrderRouter;
