import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const usersPath = path.join(__dirname, '..', 'data', 'users.json');

class UserService {
	async getAllUsers() {
		const data = await fs.readFile(usersPath, 'utf8');
		return JSON.parse(data);
	}

	async getUserById(id) {
		const users = await this.getAllUsers();
		return users.find((user) => user.id === parseInt(id));
	}

	async createUser(userData) {
		const users = await this.getAllUsers();
		const newUser = {
			id: users.length + 1,
			...userData,
		};
		users.push(newUser);
		await fs.writeFile(usersPath, JSON.stringify(users, null, 2));
		return newUser;
	}

	async updateUser(id, userData) {
		const users = await this.getAllUsers();
		const index = users.findIndex((user) => user.id === parseInt(id));
		if (index === -1) return null;

		users[index] = { ...users[index], ...userData };
		await fs.writeFile(usersPath, JSON.stringify(users, null, 2));
		return users[index];
	}

	async deleteUser(id) {
		const users = await this.getAllUsers();
		const filteredUsers = users.filter((user) => user.id !== parseInt(id));
		if (filteredUsers.length === users.length) return false;

		await fs.writeFile(usersPath, JSON.stringify(filteredUsers, null, 2));
		return true;
	}
}

export default new UserService();
