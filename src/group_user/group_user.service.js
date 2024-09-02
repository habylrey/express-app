import path from 'path';
import { fileURLToPath } from 'url';
import Repository from '../repository/repository.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const groupUsersPath = path.join(__dirname, '..', 'data', 'group_users.json');

const getAllGroupUsers = () => Repository.getAll(groupUsersPath);
const getGroupUserById = (id) => Repository.getById(groupUsersPath, id);
const createGroupUser = (groupUser) =>
	Repository.create(groupUsersPath, groupUser);
const updateGroupUser = (id, groupUser) =>
	Repository.update(groupUsersPath, id, groupUser);
const deleteGroupUser = (id) => Repository.remove(groupUsersPath, id);

export default {
	getAllGroupUsers,
	getGroupUserById,
	createGroupUser,
	updateGroupUser,
	deleteGroupUser,
};
