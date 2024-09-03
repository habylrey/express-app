import path from 'path';
import { fileURLToPath } from 'url';
import Repository from '../repository/repository.js';
import { NotFoundException } from '../server/server.exceptions.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const usersPath = path.join(__dirname, '..', 'data', 'users.json');

const getAllUsers = async () => {
	try {
		return await Repository.getAll(usersPath);
	} catch (error) {
		throw new Error('Failed to fetch all users');
	}
};

const getUserById = async (id) => {
	try {
		const user = await Repository.getById(usersPath, id);
		if (!user) throw new NotFoundException(`User with id ${id} not found`);
		return user;
	} catch (error) {
		throw error;
	}
};

const createUser = async (userData) => {
	try {
		return await Repository.create(usersPath, userData);
	} catch (error) {
		throw new Error('Failed to create user');
	}
};

const updateUser = async (id, userData) => {
	try {
		const updatedUser = await Repository.update(usersPath, id, userData);
		if (!updatedUser)
			throw new NotFoundException(`User with id ${id} not found`);
		return updatedUser;
	} catch (error) {
		throw error;
	}
};

const deleteUser = async (id) => {
	try {
		const result = await Repository.remove(usersPath, id);
		if (!result)
			throw new NotFoundException(`User with id ${id} not found`);
		return result;
	} catch (error) {
		throw error;
	}
};

export default {
	getAllUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
};
