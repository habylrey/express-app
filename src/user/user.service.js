import path from 'path';
import { fileURLToPath } from 'url';
import Repository from '../repository/repository.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const usersPath = path.join(__dirname, '..', 'data', 'users.json');

const getAllUsers = () => Repository.getAll(usersPath);
const getUserById = (id) => Repository.getById(usersPath, id);
const createUser = (userData) => Repository.create(usersPath, userData);
const updateUser = (id, userData) => Repository.update(usersPath, id, userData);
const deleteUser = (id) => Repository.remove(usersPath, id);

export default {
	getAllUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
};
