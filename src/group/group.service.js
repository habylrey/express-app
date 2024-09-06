import models from '../DTO/models/model.service.js';
import { NotFoundException } from '../server/server.exceptions.js';

async function getAllGroups() {
	return await models.Group.findAll();
}

async function getGroupById(id) {
	const group = await models.Group.findByPk(id);
	if (!group) {
		throw new NotFoundException(`Group with id ${id} not found`);
	}
	return group;
}

async function createGroup(groupData) {
	return await models.Group.create(groupData);
}

async function updateGroup(id, groupData) {
	const [rowsUpdated, [updatedGroup]] = await models.Group.update(groupData, {
		where: { id },
		returning: true,
	});

	if (rowsUpdated === 0) {
		throw new NotFoundException(`Group with id ${id} not found`);
	}

	return updatedGroup;
}

async function deleteGroup(id) {
	const rowsDeleted = await models.Group.destroy({ where: { id } });
	if (rowsDeleted === 0) {
		throw new NotFoundException(`Group with id ${id} not found`);
	}
	return rowsDeleted;
}

export default {
	getAllGroups,
	getGroupById,
	createGroup,
	updateGroup,
	deleteGroup,
};
