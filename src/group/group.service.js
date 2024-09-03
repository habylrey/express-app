import path from 'path';
import { fileURLToPath } from 'url';
import Repository from '../repository/repository.js';
import { NotFoundException } from '../server/server.exceptions.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const groupsPath = path.join(__dirname, '..', 'data', 'groups.json');

const getAllGroups = async () => {
	try {
		return await Repository.getAll(groupsPath);
	} catch (error) {
		throw new Error('Failed to fetch all groups');
	}
};

const getGroupById = async (id) => {
	try {
		const group = await Repository.getById(groupsPath, id);
		if (!group)
			throw new NotFoundException(`Group with id ${id} not found`);
		return group;
	} catch (error) {
		throw error;
	}
};

const createGroup = async (groupData) => {
	try {
		return await Repository.create(groupsPath, groupData);
	} catch (error) {
		throw new Error('Failed to create group');
	}
};

const updateGroup = async (id, groupData) => {
	try {
		const updatedGroup = await Repository.update(groupsPath, id, groupData);
		if (!updatedGroup)
			throw new NotFoundException(`Group with id ${id} not found`);
		return updatedGroup;
	} catch (error) {
		throw error;
	}
};

const deleteGroup = async (id) => {
	try {
		const result = await Repository.remove(groupsPath, id);
		if (!result)
			throw new NotFoundException(`Group with id ${id} not found`);
		return result;
	} catch (error) {
		throw error;
	}
};

export default {
	getAllGroups,
	getGroupById,
	createGroup,
	updateGroup,
	deleteGroup,
};
