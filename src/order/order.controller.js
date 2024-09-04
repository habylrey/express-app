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
			next();
		}
	};

	const getOrderById = async (req, res, next) => {
		try {
			const order = await OrderService.getOrderById(req.params.id);
			res.json(order);
		} catch (err) {
			next();
		}
	};

	const createOrder = async (req, res, next) => {
		try {
			const newOrder = await OrderService.createOrder(req.body);
			res.status(201).json(newOrder);
		} catch (err) {
			next();
		}
	};

	const updateOrder = async (req, res, next) => {
		try {
			const updatedOrder = await OrderService.updateOrder(
				req.params.id,
				req.body
			);
			res.json(updatedOrder);
		} catch (err) {
			next();
		}
	};

	const deleteOrder = async (req, res, next) => {
		try {
			await OrderService.deleteOrder(req.params.id);
			res.status(204).end();
		} catch (err) {
			next();
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
