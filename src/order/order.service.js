import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ordersPath = path.join(__dirname, '..', 'data', 'orders.json');

class OrderService {
	async getAllOrders() {
		const data = await fs.readFile(ordersPath, 'utf8');
		return JSON.parse(data);
	}

	async getOrderById(id) {
		const orders = await this.getAllOrders();
		return orders.find((order) => order.id === parseInt(id));
	}

	async createOrder(orderData) {
		const orders = await this.getAllOrders();
		const newOrder = {
			id: orders.length + 1,
			...orderData,
		};
		orders.push(newOrder);
		await fs.writeFile(ordersPath, JSON.stringify(orders, null, 2));
		return newOrder;
	}

	async updateOrder(id, orderData) {
		const orders = await this.getAllOrders();
		const index = orders.findIndex((order) => order.id === parseInt(id));
		if (index === -1) return null;

		orders[index] = { ...orders[index], ...orderData };
		await fs.writeFile(ordersPath, JSON.stringify(orders, null, 2));
		return orders[index];
	}

	async deleteOrder(id) {
		const orders = await this.getAllOrders();
		const filteredOrders = orders.filter(
			(order) => order.id !== parseInt(id)
		);
		if (filteredOrders.length === orders.length) return false;

		await fs.writeFile(ordersPath, JSON.stringify(filteredOrders, null, 2));
		return true;
	}
}

export default new OrderService();
