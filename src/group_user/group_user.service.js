import groupUserRepository from './group_user.repository.js';
import { NotFoundException } from '../server/server.exceptions.js';

const getAllGroupUsers = async () => {
	return groupUserRepository.getGroupUsers();
};

const getGroupUserById = async (id) => {
	const groupUser = await groupUserRepository.getGroupUserById(id);
	if (!groupUser)
		throw new NotFoundException(`Group user with id ${id} not found`);
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
	return groupUserRepository.createGroupUser(groupUserData);
};

const updateGroupUser = async (id, groupUserData) => {
	const updatedGroupUser = await groupUserRepository.updateGroupUser(
		id,
		groupUserData
	);
	if (!updatedGroupUser)
		throw new NotFoundException(`Group user with id ${id} not found`);
	return updatedGroupUser;
};

const deleteGroupUser = async (id) => {
	const result = await groupUserRepository.deleteGroupUser(id);
	if (!result)
		throw new NotFoundException(`Group user with id ${id} not found`);
	return result;
};

export default {
	getAllGroupUsers,
	getGroupUserById,
	createGroupUser,
	updateGroupUser,
	deleteGroupUser,
};
