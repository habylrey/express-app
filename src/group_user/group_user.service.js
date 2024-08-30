import path from 'path';
import { fileURLToPath } from 'url';
import * as service from '../services/service.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const groupUsersPath = path.join(__dirname, '..', 'data', 'group_users.json');

const getAllGroupUsers = () => service.getAll(groupUsersPath);
const getGroupUserById = (id) => service.getById(groupUsersPath, id);
const createGroupUser = (groupUser) =>
	service.create(groupUsersPath, groupUser);
const updateGroupUser = (id, groupUser) =>
	service.update(groupUsersPath, id, groupUser);
const deleteGroupUser = (id) => service.remove(groupUsersPath, id);

export default {
	getAllGroupUsers,
	getGroupUserById,
	createGroupUser,
	updateGroupUser,
	deleteGroupUser,
};
