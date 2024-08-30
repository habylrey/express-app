import OrderService from './order.service.js';

class OrderController {
	async getAllOrders(req, res) {
		try {
			const orders = await OrderService.getAllOrders();
			res.json(orders);
		} catch (error) {
			res.status(500).json({ message: 'Failed to get orders' });
		}
	}

	async getOrderById(req, res) {
		try {
			const order = await OrderService.getOrderById(req.params.id);
			if (!order) {
				return res.status(404).json({ message: 'Order not found' });
			}
			res.json(order);
		} catch (error) {
			res.status(500).json({ message: 'Failed to get order' });
		}
	}

	async createOrder(req, res) {
		try {
			const newOrder = await OrderService.createOrder(req.body);
			res.status(201).json(newOrder);
		} catch (error) {
			res.status(500).json({ message: 'Failed to create order' });
		}
	}

	async updateOrder(req, res) {
		try {
			const updatedOrder = await OrderService.updateOrder(
				req.params.id,
				req.body
			);
			if (!updatedOrder) {
				return res.status(404).json({ message: 'Order not found' });
			}
			res.json(updatedOrder);
		} catch (error) {
			res.status(500).json({ message: 'Failed to update order' });
		}
	}

	async deleteOrder(req, res) {
		try {
			const result = await OrderService.deleteOrder(req.params.id);
			if (!result) {
				return res.status(404).json({ message: 'Order not found' });
			}
			res.status(204).end();
		} catch (error) {
			res.status(500).json({ message: 'Failed to delete order' });
		}
	}
}

export default new OrderController();
