import groupRepository from './group.repository.js';
import { NotFoundException } from '../server/server.exceptions.js';

const getAllGroups = async () => {
	return groupRepository.getGroups();
};

const getGroupById = async (id) => {
	const group = await groupRepository.getGroupById(id);
	if (!group) throw new NotFoundException(`Group with id ${id} not found`);
	return group;
};

const createGroup = async (groupData) => {
	return groupRepository.createGroup(groupData);
};

const updateGroup = async (id, groupData) => {
	const updatedGroup = await groupRepository.updateGroup(id, groupData);
	if (!updatedGroup)
		throw new NotFoundException(`Group with id ${id} not found`);
	return updatedGroup;
};

const deleteGroup = async (id) => {
	const result = await groupRepository.deleteGroup(id);
	if (!result) throw new NotFoundException(`Group with id ${id} not found`);
	return result;
};

export default {
	getAllGroups,
	getGroupById,
	createGroup,
	updateGroup,
	deleteGroup,
};
