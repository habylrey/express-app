import models from '../common/models/model.service.js';
import { NotFoundException } from '../server/server.exceptions.js';

const getAllUsers = async () => {
	return models.User.findAll();
};

const getUserById = async (id) => {
	const user = await models.User.findByPk(id);
	if (!user) throw new NotFoundException(`User with id ${id} not found`);
	return user;
};

const createUser = async (userData) => {
	return models.User.create(userData);
};

const updateUser = async (id, userData) => {
	const [rowsUpdated, [updatedUser]] = await models.User.update(userData, {
		where: { id },
		returning: true,
	});

	if (rowsUpdated === 0) {
		throw new NotFoundException(`User with id ${id} not found`);
	}

	return updatedUser;
};

const deleteUser = async (id) => {
	const rowsDeleted = await models.User.destroy({ where: { id } });
	if (rowsDeleted === 0) {
		throw new NotFoundException(`User with id ${id} not found`);
	}
	return rowsDeleted;
};

export default {
	getAllUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
};
