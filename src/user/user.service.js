import path from 'path';
import { fileURLToPath } from 'url';
import * as service from '../services/service.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const usersPath = path.join(__dirname, '..', 'data', 'users.json');

const getAllUsers = () => service.getAll(usersPath);
const getUserById = (id) => service.getById(usersPath, id);
const createUser = (userData) => service.create(usersPath, userData);
const updateUser = (id, userData) => service.update(usersPath, id, userData);
const deleteUser = (id) => service.remove(usersPath, id);

export default {
	getAllUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
};
