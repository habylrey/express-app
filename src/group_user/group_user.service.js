import models from '../DTO/models/model.service.js';
import { NotFoundException } from '../server/server.exceptions.js';

const getAllGroupUsers = async () => {
	return models.GroupUser.findAll();
};

const getGroupUserById = async (id) => {
	const groupUser = await models.GroupUser.findByPk(id);
	if (!groupUser) {
		throw new NotFoundException(`Group user with id ${id} not found`);
	}
	return groupUser;
};

const createGroupUser = async (groupUserData) => {
	if (
		!groupUserData.name ||
		!groupUserData.group_id ||
		!groupUserData.user_id
	) {
		throw new Error('Group user data is incomplete');
	}
	return models.GroupUser.create(groupUserData);
};

const updateGroupUser = async (id, groupUserData) => {
	const [rowsUpdated, [updatedGroupUser]] = await models.GroupUser.update(
		groupUserData,
		{
			where: { id },
			returning: true,
		}
	);

	console.log(rowsUpdated, updateGroupUser);

	if (rowsUpdated === 0) {
		throw new NotFoundException(`Group user with id ${id} not found`);
	}

	return updatedGroupUser;
};

const deleteGroupUser = async (id) => {
	const rowsDeleted = await models.GroupUser.destroy({ where: { id } });
	if (rowsDeleted === 0) {
		throw new NotFoundException(`Group user with id ${id} not found`);
	}
	return rowsDeleted;
};

export default {
	getAllGroupUsers,
	getGroupUserById,
	createGroupUser,
	updateGroupUser,
	deleteGroupUser,
};
