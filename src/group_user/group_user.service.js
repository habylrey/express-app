import models from '../DTO/models/model.service.js';
import { NotFoundException } from '../server/server.exceptions.js';

async function getAllGroupUsers() {
	try {
		return await models.GroupUser.findAll();
	} catch (err) {
		throw new Error('Failed to fetch group users');
	}
}

async function getGroupUserById(id) {
	const groupUser = await models.GroupUser.findByPk(id);
	if (!groupUser) {
		throw new NotFoundException(`Group user with id ${id} not found`);
	}
	return groupUser;
}

async function createGroupUser(groupUserData) {
	try {
		return await models.GroupUser.create(groupUserData);
	} catch (err) {
		throw err;
	}
}

async function updateGroupUser(id, groupUserData) {
	const [rowsUpdated, [updatedGroupUser]] = await models.GroupUser.update(
		groupUserData,
		{
			where: { id },
			returning: true,
		}
	);

	if (rowsUpdated === 0) {
		throw new NotFoundException(`Group user with id ${id} not found`);
	}

	return updatedGroupUser;
}

async function deleteGroupUser(id) {
	const rowsDeleted = await models.GroupUser.destroy({ where: { id } });
	if (rowsDeleted === 0) {
		throw new NotFoundException(`Group user with id ${id} not found`);
	}
	return rowsDeleted;
}

export default {
	getAllGroupUsers,
	getGroupUserById,
	createGroupUser,
	updateGroupUser,
	deleteGroupUser,
};
