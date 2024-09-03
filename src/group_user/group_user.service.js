import path from 'path';
import { fileURLToPath } from 'url';
import Repository from '../repository/repository.js';
import { NotFoundException } from '../server/server.exceptions.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const groupUsersPath = path.join(__dirname, '..', 'data', 'group_users.json');

const getAllGroupUsers = async () => {
	try {
		return await Repository.getAll(groupUsersPath);
	} catch (error) {
		throw new Error('Failed to fetch all group users');
	}
};

const getGroupUserById = async (id) => {
	try {
		const groupUser = await Repository.getById(groupUsersPath, id);
		if (!groupUser)
			throw new NotFoundException(`Group user with id ${id} not found`);
		return groupUser;
	} catch (error) {
		throw error;
	}
};

const createGroupUser = async (groupUser) => {
	try {
		return await Repository.create(groupUsersPath, groupUser);
	} catch (error) {
		throw new Error('Failed to create group user');
	}
};

const updateGroupUser = async (id, groupUser) => {
	try {
		const updatedGroupUser = await Repository.update(
			groupUsersPath,
			id,
			groupUser
		);
		if (!updatedGroupUser)
			throw new NotFoundException(`Group user with id ${id} not found`);
		return updatedGroupUser;
	} catch (error) {
		throw error;
	}
};

const deleteGroupUser = async (id) => {
	try {
		const result = await Repository.remove(groupUsersPath, id);
		if (!result)
			throw new NotFoundException(`Group user with id ${id} not found`);
		return result;
	} catch (error) {
		throw error;
	}
};

export default {
	getAllGroupUsers,
	getGroupUserById,
	createGroupUser,
	updateGroupUser,
	deleteGroupUser,
};
