import { Router } from 'express';
import OrderService from './order.service.js';
import validateRequest from '../common/validate.middleware.js';
import { idSchema } from '../common/validate.schemas.js';
import createBodySchema from './DTO/order.schema.js';
import updateBodySchema from './DTO/order.schema.js';
function createOrderRouter() {
	const router = Router();

	async function getAllOrders(req, res, next) {
		try {
			const orders = await OrderService.getAllOrders();
			res.json(orders);
		} catch (err) {
			next(err);
		}
	}

	async function getOrderById(req, res, next) {
		try {
			const order = await OrderService.getOrderById(req.params.id);
			res.json(order);
		} catch (err) {
			next(err);
		}
	}

	async function createOrder(req, res, next) {
		try {
			const newOrder = await OrderService.createOrder(req.body);
			res.status(201).json(newOrder);
		} catch (err) {
			next(err);
		}
	}

	async function updateOrder(req, res, next) {
		try {
			const updatedOrder = await OrderService.updateOrder(
				req.params.id,
				req.body
			);
			res.json(updatedOrder);
		} catch (err) {
			next(err);
		}
	}

	async function deleteOrder(req, res, next) {
		try {
			await OrderService.deleteOrder(req.params.id);
			res.status(204).end();
		} catch (err) {
			next(err);
		}
	}

	return router
		.get('/all', validateRequest(idSchema), getAllOrders)
		.get('/:id', validateRequest(idSchema), getOrderById)
		.post('/', validateRequest(createBodySchema), createOrder)
		.put(
			'/:id',
			validateRequest(updateBodySchema),
			validateRequest(idSchema),
			updateOrder
		)
		.delete('/:id', validateRequest(idSchema), deleteOrder);
}

export default createOrderRouter;
