import userRepository from './user.repository.js';
import { NotFoundException } from '../server/server.exceptions.js';

const getAllUsers = async () => {
	return userRepository.getUsers();
};

const getUserById = async (id) => {
	const user = await userRepository.getUserById(id);
	if (!user) throw new NotFoundException(`User with id ${id} not found`);
	return user;
};

const createUser = async (userData) => {
	return userRepository.createUser(userData);
};

const updateUser = async (id, userData) => {
	const updatedUser = await userRepository.updateUser(id, userData);
	if (!updatedUser)
		throw new NotFoundException(`User with id ${id} not found`);
	return updatedUser;
};

const deleteUser = async (id) => {
	const result = await userRepository.deleteUser(id);
	if (!result) throw new NotFoundException(`User with id ${id} not found`);
	return result;
};

export default {
	getAllUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
};
