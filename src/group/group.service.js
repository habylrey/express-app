import models from '../DTO/models/model.service.js';
import { NotFoundException } from '../server/server.exceptions.js';

const getAllGroups = async () => {
	try {
		return models.Group.findAll();
	} catch {
		throw NotFoundException();
	}
};

const getGroupById = async (req, res, next) => {
	try {
		const group = await GroupService.getGroupById(req.params.id);
		if (!group) {
			res.status(404).json({
				message: `Group with id ${req.params.id} not found`,
			});
		} else {
			res.json(group);
		}
	} catch (err) {
		next();
	}
};

const createGroup = async (groupData) => {
	return models.Group.create(groupData);
};

const updateGroup = async (id, groupData) => {
	const [rowsUpdated, [updatedGroup]] = await models.Group.update(groupData, {
		where: { id },
		returning: true,
	});

	if (rowsUpdated === 0) {
		throw new NotFoundException(`Group with id ${id} not found`);
	}

	return updatedGroup;
};

const deleteGroup = async (id) => {
	const rowsDeleted = await models.Group.destroy({ where: { id } });
	if (rowsDeleted === 0) {
		throw new NotFoundException(`Group with id ${id} not found`);
	}
	return rowsDeleted;
};

export default {
	getAllGroups,
	getGroupById,
	createGroup,
	updateGroup,
	deleteGroup,
};
